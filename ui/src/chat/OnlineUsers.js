import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, ListGroupItem, ListGroup } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import {
  appendUserToChat,
  removeUserFromChat,
} from "../state/actions/chatUsersActions";
import { useDispatch } from "react-redux";
import Chat from "./SendMessage/Chat";
const OnlineUsers = () => {
  const dispatch = useDispatch();
  const onlineUsers = useSelector((state) => state.usersOnline);
  
  const [checkedState, setCheckedState] = useState(
    new Array(onlineUsers.length).fill(false)
  );

  const chatUsers = (user, position) => {
    if (checkedState[position]) {
      dispatch(removeUserFromChat(user));
    } else {
      dispatch(appendUserToChat(user));
    }
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <Container className="mt-4 border mb-2">
        <h3>Chat</h3>
        <ListGroup variant="flush">
          {onlineUsers.map((user, index) => (
            <ListGroup.Item key={index} onClick={() => chatUsers(user, index)}>
              <FaCircle
                color={checkedState[index] ? "red" : "royalblue"}
              ></FaCircle>{" "}
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
