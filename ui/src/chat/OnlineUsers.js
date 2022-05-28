import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, ListGroupItem, ListGroup } from "react-bootstrap";
import { FaCircle, FaFacebookMessenger } from "react-icons/fa";
import {
  appendUserToChat,
  removeUserFromChat,
} from "../state/actions/chatUsersActions";
import { useDispatch } from "react-redux";
import Chat from "./SendMessage/Chat";
const OnlineUsers = () => {

  const dispatch = useDispatch();
  const onlineUsers = useSelector((state) => state.usersOnline);
  
  const chatUsers = (user, position) => {
    dispatch(appendUserToChat(user))
  };

  return (
    <div>
      <Container className="mt-4 border mb-2">
        <h3>Chat</h3>
        <ListGroup variant="flush">
          {onlineUsers.map((user, index) => (
            <ListGroup.Item style={{cursor:"pointer"}} key={index} onClick={() => chatUsers(user, index)}>
            <FaFacebookMessenger color="royalblue"/>{"   "}
              {user.name} 
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <Chat users = {onlineUsers} />
    </div>
  );
};

export default OnlineUsers;
