import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../state/actions/loginActions";
import {unsetCars} from "../../state/actions/carsActions"
import {unsetUser} from "../../state/actions/userActions"
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
  });

  const isLogged = useSelector((state) => state.isLogged.loggedIn);
  
  const logOut = () => {
    dispatch(logout())
    dispatch(unsetCars())
    dispatch(unsetUser())
  };

  return (
    <Navbar
      className={navbar || isLogged ? "nav-white" : "nav-black"}
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
            <Nav.Link as={NavLink} style={{ color: navbar ? "black" : "#f4f4f4" }} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link as={NavLink} style={{ color: "black" }} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} style={{ color: "black" }} to="/cars">
              Cars
            </Nav.Link>
            <Nav.Link as={NavLink} style={{ color: "black" }} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={logOut}
              as={NavLink}
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
