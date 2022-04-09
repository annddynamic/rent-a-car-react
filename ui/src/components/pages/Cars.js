import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleLeft,
  FaCheckCircle,
  FaCity,
  FaShoppingBag,
  FaSnowflake,
  FaStar,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import { useState } from "react";
import cars from "./Cars.json";
import sample1 from "../../images/sample1.jpeg";
import sample2 from "../../images/sample2.jpeg";
import sample3 from "../../images/sample3.jpeg";
import sample4 from "../../images/sample4.jpeg";
import sample5 from "../../images/sample5.jpeg";
import sample6 from "../../images/sample6.jpeg";

import "./Cars.css";

const Cars = () => {
  const [carsTypeShown, setCarsTypeShown] = useState(true);
  const [transmitionTypeShown, settransmitionTypeShown] = useState(true);
  const [userReviewTypeShown, setuserReviewTypeShown] = useState(true);

  const toggleCars = () => {
    setCarsTypeShown(!carsTypeShown);
  };

  const toggleTransmition = () => {
    settransmitionTypeShown(!transmitionTypeShown);
  };

  const toggleUserReview = () => {
    setuserReviewTypeShown(!userReviewTypeShown);
  };

  console.log(cars);
  return (
    <div className="cars-layout">
      <Container
        style={{ height: "90px", borderRadius: "10px" }}
        className="mt-4 bg-primary"
      >
        <Form style={{ paddingTop: "30px" }}>
          <Row>
            <Col>
              <Form.Control placeholder="Enter City" />
            </Col>
            <Col>
              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dob">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>
            </Col>
            <Col>
              <div className="d-grid gap-2">
                <Button variant="light" type="submit">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col className="border mt-2 h-100" md={2}>
            <Container className="mt-4">
              <h3>Filters</h3>
              <p
                onClick={toggleCars}
                className="mt-4 text-primary"
                style={{ cursor: "pointer" }}
              >
                Car type
                <span className="text-right">
                  {carsTypeShown ? <FaAngleDown /> : <FaAngleLeft />}
                </span>
              </p>
              {carsTypeShown ? (
                <div className="car-type">
                  <div className="car-checkbox">
                    <Form.Check type="checkbox" label="Economy" />
                    <Form.Check type="checkbox" label="Compact" />
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Check type="checkbox" label="Check me out" />
                  </div>
                </div>
              ) : (
                ""
              )}
              <p
                onClick={toggleTransmition}
                className="mt-4 text-primary"
                style={{ cursor: "pointer" }}
              >
                Transmition
                <span>
                  {transmitionTypeShown ? <FaAngleDown /> : <FaAngleLeft />}
                </span>
              </p>
              {transmitionTypeShown ? (
                <div className="car-type">
                  <div className="car-checkbox">
                    <Form.Check type="checkbox" label="Economy" />
                    <Form.Check type="checkbox" label="Compact" />
                  </div>
                </div>
              ) : (
                ""
              )}
              <p
                onClick={toggleUserReview}
                className="mt-4 text-primary"
                style={{ cursor: "pointer" }}
              >
                User reviews
                <span>
                  {userReviewTypeShown ? <FaAngleDown /> : <FaAngleLeft />}
                </span>
              </p>
              {userReviewTypeShown ? (
                <div className="car-type">
                  <div className="car-checkbox">
                    <Form.Check type="checkbox" label="Economy" />
                    <Form.Check type="checkbox" label="Compact" />
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Check type="checkbox" label="Check me out" />
                  </div>
                </div>
              ) : (
                ""
              )}
            </Container>
          </Col>
          <Col md={10}>
            <Row>
              <Col className="mt-2" md={4}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img variant="top" src={sample1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="icons">
                      <FaUserAlt />
                      <span>
                        <FaShoppingBag />
                      </span>
                      <span>
                        <FaCity />
                      </span>
                      <span>
                        <FaTools />
                      </span>
                      <span>
                        <FaSnowflake />
                      </span>
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" />
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" />
                    </Card.Text>
                    <Card.Text>
                      5.0 <FaStar /> Excellent{" "}
                      <span style={{ color: "grey" }}> (250 reviews)</span>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col>
              {/* <Col className="mt-2" md={4} >
                <Card style={{cursor:"pointer"}}>
                  <Card.Img variant="top" src={sample2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="icons">
                        <FaUserAlt />
                        <span>
                          <FaShoppingBag />
                        </span>
                        <span>
                          <FaCity />
                        </span>
                        <span>
                          <FaTools />
                        </span>
                        <span>
                          <FaSnowflake />
                        </span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        5.0 <FaStar/> Excellent <span style={{color:"grey"}}> (250 reviews)</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col>
              <Col className="mt-2" md={4} >
                <Card style={{cursor:"pointer"}}>
                  <Card.Img variant="top" src={sample1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="icons">
                        <FaUserAlt />
                        <span>
                          <FaShoppingBag />
                        </span>
                        <span>
                          <FaCity />
                        </span>
                        <span>
                          <FaTools />
                        </span>
                        <span>
                          <FaSnowflake />
                        </span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        5.0 <FaStar/> Excellent <span style={{color:"grey"}}> (250 reviews)</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col>
              <Col className="mt-2" md={4} >
                <Card style={{cursor:"pointer"}}>
                  <Card.Img variant="top" src={sample3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="icons">
                        <FaUserAlt />
                        <span>
                          <FaShoppingBag />
                        </span>
                        <span>
                          <FaCity />
                        </span>
                        <span>
                          <FaTools />
                        </span>
                        <span>
                          <FaSnowflake />
                        </span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        5.0 <FaStar/> Excellent <span style={{color:"grey"}}> (250 reviews)</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col>
              <Col className="mt-2" md={4} >
                <Card style={{cursor:"pointer"}}>
                  <Card.Img variant="top" src={sample4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="icons">
                        <FaUserAlt />
                        <span>
                          <FaShoppingBag />
                        </span>
                        <span>
                          <FaCity />
                        </span>
                        <span>
                          <FaTools />
                        </span>
                        <span>
                          <FaSnowflake />
                        </span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        5.0 <FaStar/> Excellent <span style={{color:"grey"}}> (250 reviews)</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col>
              <Col className="mt-2" md={4} >
                <Card style={{cursor:"pointer"}}>
                  <Card.Img variant="top" src={sample5} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <div className="icons">
                        <FaUserAlt />
                        <span>
                          <FaShoppingBag />
                        </span>
                        <span>
                          <FaCity />
                        </span>
                        <span>
                          <FaTools />
                        </span>
                        <span>
                          <FaSnowflake />
                        </span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        Lorem ipsum dolor sit. <FaCheckCircle color="royalblue" /> 
                      </p>
                      <p>
                        5.0 <FaStar/> Excellent <span style={{color:"grey"}}> (250 reviews)</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col>
                            <h3>$400</h3>
                          </Col>
                          <Col className="float-right">
                            <Button>Book now!</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </ListGroup>
                </Card>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cars;
