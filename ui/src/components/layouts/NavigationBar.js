import {Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import { FaCar } from 'react-icons/fa';
import React, { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {logout, setLogin} from '../../state/actions'
import "./NavigationBar.css"

const NavigationBar = ({loggedIn}) => {

  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
    dispatch(setLogin(JSON.parse(window.localStorage.getItem('loggedIn'))))

  })

  const isLogged = useSelector(state => state.isLogged)
  console.log(isLogged)

  const logOut =()=>{
    dispatch(logout())
    localStorage.setItem("loggedIn", false)
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  return (
    <Navbar className={(navbar) ? 'nav-scroll': 'navb'} variant="light"  collapseOnSelect  sticky="top">
    <Container>
    <Navbar.Brand  > <FaCar color={navbar ? 'black': 'white'} /></Navbar.Brand>
    {!isLogged ?
      <Nav className="me-auto">
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/">Home</Nav.Link>
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/log-in">Log in</Nav.Link>
        <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/register">Register</Nav.Link>
      </Nav>: 
      <Nav className="me-auto">
       <Nav.Link as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/dashboard">My profile</Nav.Link>
       <Nav.Link onClick={logOut} as={Link} style={{color: navbar ? 'black': '#f4f4f4'}} to="/">Log out</Nav.Link>
     </Nav>
    }
    </Container>
  </Navbar>
  )
}

export default NavigationBar