import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import { FaPhone } from "react-icons/fa";
const socket = io.connect("http://localhost:8080");
const VideoChat = () => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(currentUser.firstName);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div>
        <Form.Group className="mt-4" controlId="formBasicEmail">
        <Row>
          <Col md={6}>
            <Form.Control
              name="email"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <div className="call-button">
              {callAccepted && !callEnded ? (
                <Button color="secondary" onClick={leaveCall}>
                  End 
                </Button>
              ) : (
                <Button
                  color="primary"
                  aria-label="call"
                  onClick={() => callUser(idToCall)}
                >
                  <FaPhone fontSize="large" />
                </Button>
              )}
            </div>
          </Col>
          <Col md={4}>
          <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
        <Button color="primary">Copy ID</Button>
      </CopyToClipboard>
          </Col>
        </Row>
      </Form.Group>
      <div className="video">
        {stream && (
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            style={{ width: "300px" }}
          />
        )}
      </div>
      <div className="video">
        {callAccepted && !callEnded ? (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            style={{ width: "300px" }}
          />
        ) : null}
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div className="caller text-center">
            <h3>{name} is calling...</h3>
            <Button  color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoChat;
