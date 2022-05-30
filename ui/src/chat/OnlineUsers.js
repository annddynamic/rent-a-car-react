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
import axios from "axios";
import { setChat } from "../state/actions/chatActions";
import VideoChat from "../video-chat/VideoChat";
const OnlineUsers = () => {

  const dispatch = useDispatch();
  const onlineUsers = useSelector((state) => state.usersOnline);
  const sender = useSelector((state) => state.user);

  const chatUsers = (user) => {
    dispatch(appendUserToChat(user));
    console.log(sender._id, user.id);
    const url = "http://localhost:9090/messages";
    axios
      .post(url, {
        sender_id: sender._id,
        receiver_id: user.id,
      })
      .then((response) => {
        dispatch(setChat(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="mt-4 border mb-2">
        <h3>Chat</h3>
        <ListGroup variant="flush">
          {onlineUsers.map((user, index) =>
            user.id !== sender._id ? (
              <ListGroup.Item
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => chatUsers(user, index)}
              >
                <FaFacebookMessenger color="royalblue" />
                {user.name}
              </ListGroup.Item>
            ) : (
              " "
            )
          )}
        </ListGroup>
      </Container>
      <Chat users={onlineUsers} />
      <VideoChat/>
    </div>
  );
};

export default OnlineUsers;
