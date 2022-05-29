import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

    //try catch block
    // try {
    //   console.log(newCar);
    //   axios.post("http://localhost:8080/api", newCar);
    // } catch (error) {
    //   console.log(error);
    // }

    console.log(newCar);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.car_model || values.car_model.trim() === "") {
      errors.car_model = "Car model is not valid";
    }
    if (!values.car_series || values.car_series.trim() === "") {
      errors.car_series = "Car series is not valid";
    }
    if (!values.car_type || values.car_type.trim() === "Choose...") {
      errors.car_type = "Car type is not valid";
    }
    if (
      !values.prod_year ||
      Number.isInteger(parseInt(values.prod_year)) === false
    ) {
      errors.prod_year = "Production year isn't valid";
    }
    if (
      !values.price_for_24h ||
      Number.isInteger(parseInt(values.price_for_24h)) === false
    ) {
      errors.price_for_24h = "Price for 24h is not valid";
    }
    if (!values.country || values.country.trim() === "") {
      errors.country = "Country is not valid";
    }
    if (!values.seats || Number.isInteger(parseInt(values.seats)) === false) {
      errors.seats = "Seats is not valid";
    }
    if (!values.transmission || values.transmission.trim() === "Choose...") {
      errors.transmission = "Transmission is not valid";
    }
    if (
      !values.max_speed ||
      Number.isInteger(parseInt(parseInt(values.max_speed))) === false
    ) {
      errors.max_speed = "Max speed is not valid";
    }
    if (!values.doors || Number.isInteger(parseInt(values.doors)) === false) {
      errors.doors = "Doors is not valid";
    }
    if (
      !values.air_conditioning ||
      values.air_conditioning.trim() === "Choose..."
    ) {
      errors.air_conditioning = "Air conditioning is not valid";
    }

    if (!values.miles || Number.isInteger(parseInt(values.miles)) === false) {
      errors.miles = "Miles is not valid";
    }
    return errors;
  };
  const handleClearForm = (event) => {
    event.preventDefault();
    setNewCar(initialStateValues);
    setFormErrors({});
    setIsSubmit(false);
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
          <div className="d-flex flex-row justify-content-between">
            <Button variant="danger" onClick={handleClearForm}>
              Clear
            </Button>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
