import React, { useEffect, useRef, useState } from "react";

const ChatRoom = () => {
  const myVideo = useRef();
  const userVideo = useRef();
  const [stream, setStream] = useState();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });
  });

  return <div>ChatRoom</div>;
};

export default ChatRoom;
