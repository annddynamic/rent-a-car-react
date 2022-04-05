import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import "./Login.css"

const Login = () => {
  return (
    <Container className='login-wrapper'>
      <Row>
        <Col className='left-wrapper' md={7}>
          <Container>
              <h1 className='text-center'>Login</h1>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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