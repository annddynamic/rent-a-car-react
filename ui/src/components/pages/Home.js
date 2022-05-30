import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import shtoperica from "../../images/jeep.jpg";
import {logout} from '../../state/actions/loginActions'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";

const Home = () => {
  
  const islogged = useSelector((state)=>state.isLogged.loggedIn)
  const dispatch = useDispatch();

  const logOutIfLoggedIn = ()=>{
    if(islogged){
      dispatch(logout())
    }
  }
  useEffect(() => {
    logOutIfLoggedIn()
  });

  return (
    <div className="home-wrapper">
      <div className="cover">
        <Container>
          <Row className="align">
            <Col md={8}>
              <h1> Need a ride? </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                dolores similique ex asperiores consectetur? Eveniet velit
                recusandae odio sed explicabo!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis quis voluptatum earum, sit quos necessitatibus
                accusantium, exercitationem perspiciatis mollitia possimus
                facere aperiam totam dolor doloremque quo magni? Voluptatibus
                obcaecati, quo architecto, aut tenetur, enim alias fuga
                recusandae consectetur ex veniam?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second">
        <Container>
          <Row>
            <Col md={6}>
              <img src={shtoperica} style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={6}>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dicta, a nemo suscipit repellendus, similique
                deleniti earum facilis sed dolor accusantium aliquam. Ab hic
                laudantium earum laboriosam magni ex dignissimos corporis ipsum
                maiores sed? Odio porro quasi quibusdam illo dicta!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "120px" }}></div>
    </div>
  );
};

export default Home;
