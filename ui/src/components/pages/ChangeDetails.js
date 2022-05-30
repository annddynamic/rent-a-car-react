import {useState} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux'
import { FaArrowCircleLeft } from "react-icons/fa";

const UserDetails = () => {
  const user = useSelector(state => state.user)
  const [data, setData] = useState({
    id: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
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
			const url = "http://localhost:8080/api/user/change-details";
			const { data: res } = await axios.post(url, data);
			navigate("/dashboard");
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
       <h1 className='text-center'>Change Details</h1>
       <Alert show={show} variant="danger">
        <Alert.Heading>{error}</Alert.Heading>
        </Alert>       
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="firstName" value={data.firstName} onChange={handleChange} placeholder="Enter new name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Enter new last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter new email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name = "password"  onChange={handleChange} placeholder="Enter Password" />
        </Form.Group>
        <Link to="/Dashboard" className='btn btn-secondary col-md-2'><FaArrowCircleLeft /> Back </Link>
        <Button variant="primary" type="submit" className='col-md-4' style={{float:"right"}}>
          Save Changes
        </Button>
        </Form>
    </Container>
  )
}

export default UserDetails