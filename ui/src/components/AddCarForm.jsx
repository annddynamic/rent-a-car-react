import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function AddCarForm() {
  const initialStateValues = {
    car_model: "",
    car_series: "",
    car_type: "",
    prod_year: "",
    price_for_24h: "",
    country: "",
    seats: "",
    transmission: "",
    max_speed: "",
    doors: "",
    air_conditioning: "",
    start_day_booking: "",
    finish_day_booking: "",
    miles: "",
  };
  const [newCar, setNewCar] = useState(initialStateValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(newCar);
    }
  }, [formErrors]);

  const handleChange = (event) => {
    //prevent default
    event.preventDefault();
    // console.log(event.target.value, event.target.name);

    setNewCar({
      ...newCar,
      [event.target.name]: event.target.value,
    });
    validate(newCar);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(newCar));
    setIsSubmit(true);
    console.log(newCar);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.car_model) {
      errors.car_model = "Car model is required";
    }
    if (!values.car_series) {
      errors.car_series = "Car series is required";
    }
    if (!values.car_type) {
      errors.car_type = "Car type is required";
    }
    if (!values.prod_year) {
      errors.prod_year = "Production year is required";
    }
    if (!values.price_for_24h) {
      errors.price_for_24h = "Price for 24h is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.seats) {
      errors.seats = "Seats is required";
    }
    if (!values.transmission) {
      errors.transmission = "Transmission is required";
    }
    if (!values.max_speed) {
      errors.max_speed = "Max speed is required";
    }
    if (!values.doors) {
      errors.doors = "Doors is required";
    }
    if (!values.air_conditioning) {
      errors.air_conditioning = "Air conditioning is required";
    }

    if (!values.miles) {
      errors.miles = "Miles is required";
    }
    return errors;
  };

  return (
    <div>
      <Container className="w-50 ">
        <Form onChange={handleChange} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="formGridEmail"

              // onChange={handleChange}
            >
              <Form.Label>Car Model</Form.Label>
              <Form.Control
                placeholder="Enter model"
                name="car_model"
                value={newCar.car_model}
              />
              <p className="text-danger">{formErrors.car_model}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Series</Form.Label>
              <Form.Control
                placeholder="Series"
                name="car_series"
                value={newCar.car_series}
              />
              <p className="text-danger">{formErrors.car_series}</p>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Car Type</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="car_type"
                value={newCar.car_type}
              >
                <option>Choose...</option>
                <option>Compact</option>
                <option>Sport</option>
                <option>SUV</option>
              </Form.Select>
              <p className="text-danger">{formErrors.car_type}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="Country"
                name="country"
                value={newCar.country}
              />
              <p className="text-danger">{formErrors.country}</p>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState ">
              <Form.Label>Transmission</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="transmission"
                value={newCar.transmission}
              >
                <option>Choose...</option>
                <option>Manual</option>
                <option>Automatic</option>
              </Form.Select>
              <p className="text-danger">{formErrors.transmission}</p>
            </Form.Group>

            <Form.Group as={Col} className="mb-3 py-auto" id="formGridCheckbox">
              <Form.Label>Air Conditioning</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="air_conditioning"
                value={newCar.air_conditioning}
              >
                <option>Choose...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
              <p className="text-danger">{formErrors.air_conditioning}</p>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nr. of Dors</Form.Label>
              <Form.Control
                placeholder="Dors"
                name="doors"
                value={newCar.doors}
              />
              <p className="text-danger">{formErrors.doors}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nr. of Seats</Form.Label>
              <Form.Control
                placeholder="Seats"
                name="seats"
                value={newCar.seats}
              />
              <p className="text-danger">{formErrors.seats}</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Production Year</Form.Label>
              <Form.Control
                placeholder="Year"
                name="prod_year"
                value={newCar.prod_year}
              />
              <p className="text-danger">{formErrors.prod_year}</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Max Speed</Form.Label>
              <Form.Control
                placeholder="Km/h"
                name="max_speed"
                value={newCar.max_speed}
              />
              <p className="text-danger">{formErrors.max_speed}</p>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Miles</Form.Label>
              <Form.Control placeholder="" name="miles" value={newCar.miles} />
              <p className="text-danger">{formErrors.miles}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Price for 24h</Form.Label>
              <Form.Control
                placeholder="€"
                name="price_for_24h"
                value={newCar.price_for_24h}
              />
              <p className="text-danger">{formErrors.price_for_24h}</p>
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
