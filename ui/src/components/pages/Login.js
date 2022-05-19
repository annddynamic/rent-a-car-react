import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { login } from "../../state/actions/loginActions";
import { setUser } from "../../state/actions/userActions";
import { userJoined, userJoinedAck, userLeft, messageReceived } from "../../state/actions/chatActions";
import Singleton from "../../chat/socket";
import MessageType from "../../chat/SendMessage/MessageType";
import axios from "axios";
import "./Login.css"

const Login = () => {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const url = "http://localhost:8080/api/login";
			const { data: res } = await axios.post(url, data);
      dispatch(login(res.token))
      dispatch(setUser(res.user))
			navigate("/dashboard");
      registerSocket(res.user)
     
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        setShow(true)
				setError(error.response.data.message);
			}
		}
	};

  const registerSocket = (user) => {

    let socket = Singleton.getInstance();

    socket.onmessage = (response) => {

      let message = JSON.parse(response.data);
      let users;
      switch (message.type) {
        case MessageType.TEXT_MESSAGE:
          dispatch(messageReceived(message));
          break;
        case MessageType.USER_JOINED:
          users = JSON.parse(message.data);
          dispatch(userJoined(users));
          break;
        case MessageType.USER_LEFT:
          users = JSON.parse(message.data);
          dispatch(userLeft(users));
          break;
        case MessageType.USER_JOINED_ACK:
          let thisUser = message.user;
          dispatch(userJoinedAck(thisUser));
          break;
        default:
      }
    }

    socket.onopen = () => {
      sendJoinedMessage(socket, user);
    }

    window.onbeforeunload = () => {
      let messageDto = JSON.stringify({ user: user.firstName, type: MessageType.USER_LEFT });
      this.socket.send(messageDto);
    }
  }

  const sendJoinedMessage =(socket, user) =>{
    console.log("aaaaaaaaa")
    let messageDto = JSON.stringify({ user: user.firstName, type: MessageType.USER_JOINED });
    socket.send(messageDto);
  }

  const [show, setShow] = useState(false);


  return (
    <Container className='login-wrapper'>
      <Row>
        <Col className='left-wrapper' md={7}>
          <Container>
              <h1 className='text-center'>Login</h1>
              <Alert show={show} variant="danger">
                <Alert.Heading>{error}</Alert.Heading>
              </Alert> 
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value= {data.email} onChange={handleChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value= {data.password} onChange={handleChange} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Form>
          </Container>
        </Col>
        <Col className='right-wrapper' md={5}>
        </Col>
      </Row>
    </Container>
  )
}

export default Login