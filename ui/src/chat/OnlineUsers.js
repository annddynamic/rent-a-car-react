import React from 'react'
import { useSelector } from "react-redux";
import { Container, ListGroupItem,ListGroup } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';
const OnlineUsers = () => {
    const onlineUsers = useSelector((state)=>state.usersOnline)
    return (
        <Container className="mt-4">
        <h3>Chat</h3>
        <ListGroup variant="flush">
            {onlineUsers.map((user, index) => (
                <ListGroup.Item key={index}><FaCircle color="royalblue"></FaCircle> {user.name}</ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
  )
}

export default OnlineUsers