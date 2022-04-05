import {Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import { FaCar } from 'react-icons/fa';
import React, { useState, useEffect } from "react"
import "./NavigationBar.css"
const NavigationBar = ({loggedIn, logout}) => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY )
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


  return (
    <Navbar className={(navbar) ? 'nav-scroll': 'navb'} variant="light"  collapseOnSelect  sticky="top">
    <Container>
    <Navbar.Brand  > <FaCar color={navbar ? 'black': 'white'} /></Navbar.Brand>
    {!loggedIn ?
      <Nav className="me-auto">
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/">Home</Nav.Link>
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/log-in">Log in</Nav.Link>
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/register">Register</Nav.Link>
      </Nav>: 
      <Nav className="me-auto">
       <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/">AAAAAAAAA</Nav.Link>
       <Nav.Link onClick={logout} as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/">LOG OUT</Nav.Link>
     </Nav>
    }
    </Container>
  </Navbar>
  )
}

export default NavigationBar