import {Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import { FaCar } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand  > <FaCar /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/log-in">Log in</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar