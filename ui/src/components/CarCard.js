import React from "react";
import { Row, Col, Card, Container, Button, ListGroup } from "react-bootstrap";
import {
  FaCheckCircle,
  FaCity,
  FaShoppingBag,
  FaSnowflake,
  FaTimesCircle,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import {Link} from 'react-router-dom'
import sample1 from "../images/sample1.jpeg";

const CarCard = ({ car }) => {
  return (
    <Col className="mt-2" md={4}>
      <Card style={{ cursor: "pointer", textDecoration:"none", color:"black" }} as={Link} to={`${car._id}` } >
        <Card.Img variant="top" src={sample1} />
        <Card.Body>
          <Card.Title>
            {car.car_model} {car.car_series}
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
            Transsmision: {car.transmission}
            <FaCheckCircle color="royalblue" />
          </Card.Text>
          <Card.Text>
            Air conditioning:
            {car.air_conditioning ? (
              <FaCheckCircle color="royalblue" />
            ) : (
              <FaTimesCircle color="royalblue" />
            )}
          </Card.Text>
          <Card.Text>
            <span style={{ color: "grey" }}>{car.car_type}</span>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <h3>${car.price_for_24h}</h3>
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
  );
};

export default CarCard;
