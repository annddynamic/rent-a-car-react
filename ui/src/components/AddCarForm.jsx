import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import React, { useState } from "react";

export default function AddCarForm() {
  return (
    <div>
      <Container className="w-50 ">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Car Model</Form.Label>
              <Form.Control placeholder="Enter model" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Series</Form.Label>
              <Form.Control placeholder="Series" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Car Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Compact</option>
                <option>Sport</option>
                <option>SUV</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control placeholder="Country" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState ">
              <Form.Label>Transmission</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Manual</option>
                <option>Automatic</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="mb-3 py-auto" id="formGridCheckbox">
              <Form.Label>Has Air Conditioning</Form.Label>
              <Form.Check type="checkbox" label="Air Conditioning" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nr. of Dors</Form.Label>
              <Form.Control placeholder="Dors" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nr. of Seats</Form.Label>
              <Form.Control placeholder="Seats" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Production Year</Form.Label>
              <Form.Control placeholder="Year" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Max Speed</Form.Label>
              <Form.Control placeholder="Km/h" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Miles</Form.Label>
              <Form.Control placeholder="Dors" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Price for 24h</Form.Label>
              <Form.Control placeholder="€" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
