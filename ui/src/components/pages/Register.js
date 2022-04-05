import {useState} from 'react'
import { Container, Form, Button, Row, Col, Alert, } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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


  const [show, setShow] = useState(false);

  return (
    <Container>
       <h1 className='text-center'>Register</h1>
       <Alert show={show} variant="danger">
        <Alert.Heading>{error}</Alert.Heading>
        </Alert>       
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="firstName" value = {data.firstName} onChange={handleChange} placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value = {data.lastName} onChange={handleChange} placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value= {data.email} onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name = "password" value={data.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
    </Container>
  )
}

export default Register