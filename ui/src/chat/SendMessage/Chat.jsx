import React from "react";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
const Chat = () => {
  const users = useSelector((state) => state.usersToChat);

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>
        {users.map((user, index) => (
          <span>{user.name + ",  " } </span>
          ))}
          </Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Chat;
