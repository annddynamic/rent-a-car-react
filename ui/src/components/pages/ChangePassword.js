import {useState} from 'react'
import { Container, Form, Button, Row, Col, Alert, FormLabel } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux'
import { FaArrowCircleLeft } from "react-icons/fa";

const ChangePassword = () => {

  const user = useSelector(state => state.user)
  
  const [data, setData] = useState({
        email:user.email,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword:"",
        errorMessage: "",
        errorMessageMatch: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
        if(data.currentPassword === '' || data.newPassword === '' || data.confirmNewPassword === ''){
            setData({...data, errorMessage: "Please fill all fields!" });
            return false;
        }
        if(data.errorMessage !== '' || data.errorMessageMatch !== ''){
            return false;
        }
		try {
			const url = "http://localhost:8080/api/user/change-password";
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

  //method to display validation message
  const ShowValidation = ({message}) =>
    <p className="text-danger" style={{float:"left", width:"100%"}} >{message}</p> 

  return (
    <Container>
       <h1 className='text-center'>Change Password</h1>
       <Alert show={show} variant="danger">
        <Alert.Heading>{error}</Alert.Heading>
        </Alert>   
        <Form onSubmit={handleSubmit}>    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" disabled={true} value= {user.email}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="currentPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" name = "currentPassword" value= {data.oldPassword} onChange={handleChange} placeholder="Type your current password..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" name = "newPassword" value= {data.newPassword} onChange={handleChange} placeholder="Type your new password..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmNewPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" name = "confirmNewPassword" value= {data.confirmNewPassword} onChange={handleChange} placeholder="Type your new password..." />
        </Form.Group>
        <Row >
            <Col style={{marginLeft:"-4%"}}>
                <FormLabel><ShowValidation message={data.errorMessage === '' ? data.errorMessageMatch : data.errorMessage} /></FormLabel>
            </Col>
        </Row>
        <Link to="/Dashboard" className='btn btn-secondary col-md-2'><FaArrowCircleLeft /> Back </Link>
        <Button variant="primary" type="submit" className='col-md-4' style={{float:"right"}}>
          Change Password
        </Button>
        
        </Form>
    </Container>
  )
}

export default ChangePassword