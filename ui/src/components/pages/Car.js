import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";

const Car = () => {
  let { id } = useParams();
  const cars = useSelector((state) => state.cars);

  const [car, setCar] = useState(cars.filter(car => car._id === id));

  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');
  
  const [data, setData] = useState({ from: "", to: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const token = useSelector((state)=>state.isLogged.token)

  const dispatch = useDispatch();

  const bookCar = async (e) => {
    
    e.preventDefault();
    var today = new Date(),
    date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    //today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var dateFromInput = new Date(data.from);
    var dateToInput = new Date(data.to);
    if(date.getTime() > dateFromInput.getTime() || dateToInput.getTime() < dateFromInput.getTime()){
      console.log('Dta eshte me e madhe se sot!');
      return;
    }
    const url = `http://localhost:8080/api/cars/${id}`;
    axios
      .patch(url, {rented: true,start_day_booking: data.from, finish_day_booking: data.to},{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res);
      });
      
    console.log(data);
  }

  return (
    <Container className="text-center">
      <h1>
        {car[0].car_model} {car[0].car_series}
      </h1> 
      <p>{car[0].country}</p>
      <p>{car[0].car_type}</p>
      <p>{car[0].prod_year}</p>
      <p>{id}</p>
      <Form style={{ padding: "20px" }} onSubmit={bookCar}>
        <Row>
          <Col>
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="from"
                value={data.from}
                onChange={handleChange}
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="to"
                value={data.to}
                onChange={handleChange}
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button variant="light" type="submit">
                Book
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      
      <h1>
        Back
        <Link style={{ color: "black", textDecoration: "none" }} to="/cars">
          <FaArrowCircleLeft />
        </Link>
      </h1>
    </Container>
  );
};

export default Car;
