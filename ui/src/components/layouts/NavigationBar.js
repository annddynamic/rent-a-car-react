import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink, Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, setLogin } from "../../state/actions/loginActions";
import "./NavigationBar.css";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    dispatch(setLogin(JSON.parse(window.localStorage.getItem("loggedIn"))));
  });

  const isLogged = useSelector((state) => state.isLogged);

  const logOut = () => {
    dispatch(logout());
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <Navbar
      className={navbar || isLogged ? "nav-white" : "nav-black"}
      variant="light"
      collapseOnSelect
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <h3 style={{ color: navbar || isLogged ? "black" : "white" }}>
            {isShown && <span>OTR </span>} <FaCar />
          </h3>
        </Navbar.Brand>
        {!isLogged ? (
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              style={{ color: navbar ? "black" : "#f4f4f4" }}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              style={{ color: navbar ? "black" : "#f4f4f4" }}
              to="/login"
            >
              Log in
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              style={{ color: navbar ? "black" : "#f4f4f4" }}
              to="/register"
            >
              Register
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link as={NavLink} style={{ color: "black" }} to="/dashboard">
              My profile
            </Nav.Link>
            <Nav.Link
              onClick={logOut}
              as={Link}
              style={{ color: "black" }}
              to="/"
            >
              Log out
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
