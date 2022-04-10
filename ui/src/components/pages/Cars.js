import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
  Pagination,
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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import carsJson from "./Cars.json";

import "./Cars.css";

const Cars = () => {

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(carsJson))
  }, []);

  const cars = useSelector((state) => state.cars);
  const [itemsPerPage, setItemsPerPage] = useState(cars.slice(0,6));
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
  
  const [active, setActivePage] = useState(1);
  let items = [];

  for (let number = 1; number <= Math.ceil(cars.length / 6); number++) {
    items.push(number);
  }

  const setActive = (item) => {
    setActivePage(item)
    setItemsPerPage(cars.slice(item*6-6, item*6))
  };

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
              {itemsPerPage.map((car, index) => (
                <Col key={index} className="mt-2" md={4}>
                  <Card style={{ cursor: "pointer" }}>
                    <Card.Img
                      variant="top"
                      src={require("../../images/" + car.picture + ".jpeg")}
                    />
                    <Card.Body>
                      <Card.Title>
                        {car.brand} {car.series}
                      </Card.Title>
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
                        Transsmision: {car.transsmision}
                        <FaCheckCircle color="royalblue" />
                      </Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit.
                        <FaCheckCircle color="royalblue" />
                      </Card.Text>
                      <Card.Text>
                        {car.rating}.0 <FaStar /> Excellent
                        <span style={{ color: "grey" }}>
                          {" "}
                          ({car.reviews} reviews)
                        </span>
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <Card.Body>
                        <Container>
                          <Row>
                            <Col>
                              <h3>${car.price}</h3>
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
              ))}
              <Pagination>
                {items.map((item) => (
                  <Pagination.Item
                    onClick={() => setActive(item)}
                    active={item === active}
                    key={item}
                  >
                    {item}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cars;
