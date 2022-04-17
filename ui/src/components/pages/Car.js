import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { FaArrowCircleLeft } from "react-icons/fa";

const Car = () => {
  let { id } = useParams();
  const cars = useSelector((state) => state.cars);

  const [car, setCar] = useState(cars.filter(car => car._id === id));

  return (
    <Container className="text-center">
      <h1>
        {car[0].car_model} {car[0].car_series}
      </h1>
      <p>{car[0].country}</p>
      <p>{car[0].car_type}</p>
      <p>{car[0].prod_year}</p>
      <p>{id}</p>
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
