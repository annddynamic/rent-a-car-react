import React from "react";
import { Accordion, Form, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import Singleton from "../socket";
import MessageType from "./MessageType";
import { FaCommentsDollar } from "react-icons/fa";

const Chat = () => {
  const usersToChat = useSelector((state) => state.usersToChat);
  const sender = useSelector((state) => state.user);
  const messages = useSelector((state) => state.message);

  const [data, setData] = useState({ text: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.text);
    let user = {
      id: sender._id,
      name: sender.firstName,
    };

    const message = {
      user: user,
      data: data.text,
      to: usersToChat,
      type: MessageType.TEXT_MESSAGE,
    };

    console.log(message);
    const socket = Singleton.getInstance();
    let messageDto = JSON.stringify(message);
    socket.send(messageDto);
    setData((data) => ({
      text: "",
    }));
  };
  const style = {
    display: "block",
    margin: "5px 0",
    height: "100px",
  };
  const textStyle = {
    float: "right",
    backgroundColor: "#fff",
    padding: "6px 10px",
    borderRadius: "15px",
    margin: " 0 0 0 40px",
    textAlign: "left",
  };

  const nameStyle = {
    color: "green",
    float: "right",
  };

  const sentMessageStyle =
    "d-flex border rounded-pill flex-row justify-content-end border-success mb-2  ";
  const receivedMessageStyle = "border border rounded-pill ";
  console.log(messages);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="mb-2">
          {usersToChat.map((user, index) => (
            <span>{user.name + ",  "} </span>
          ))}
        </Accordion.Header>
        <Accordion.Body>
         

          <div className="d-flex flex-column justify-content-between">
            
          {messages.map((message) => (
              <div className={sentMessageStyle}>
                <div> {message.user.name} : {message.data}</div>
              </div>
            ))}
            
            
            {/* {messages.map((message) => (
              <div className={sentMessageStyle}>
                <div> {message.user.name} : {message.data}</div>
              </div>
            ))} */}

            <div className={receivedMessageStyle}>
              <div className=" border border-info "> akdlfjldasn</div>
            </div>

            
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="text"
                value={data.text}
                onChange={handleChange}
                placeholder="Enter text"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Chat;
