import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Offcanvas,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import AddCarForm from "../../AddCarForm";
import InfoCard from "../../InfoCard";
import axios from "axios";

const CompanyDashboard = () => {
  const [show, setShow] = useState(false);
  const [cars, setCars] = useState([]);

  const token = useSelector((state) => state.isLogged.token);
  const onToatalOwnersClick = () => {
    console.log("onToatalOwnersClick");
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    console.log("fetchCars");
    const url = "http://localhost:8080/api/cars";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("asdfassdfsdfsdf", res.data);
        const cars = res.data;
        setCars(cars);
        console.log(res.data, "asdjasbnkd");
      });
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-around  py-3 ">
        <InfoCard
          title="Total cars"
          value={cars.length}
          moreInfo={() => onToatalOwnersClick()}
        />

        <InfoCard title="Total car owners" value={cars.length} />

        <InfoCard title="Total car owners" value={12} />
      </div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey={1} title="Cars ">
          <Container>
            <Table striped bordered hover className="border rounded">
              <thead>
                <tr>
                  <th>Car Model</th>
                  <th>Car Series</th>
                  <th>Car Type</th>
                  <th>Prod Year </th>
                  <th>Price for 24h </th>
                  <th>Is Rented </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((data) => {
                  return (
                    <tr key={data.car_model}>
                      <td>{data.car_model}</td>

                      <td>{data.car_series}</td>
                      <td>{data.car_type}</td>
                      <td>{data.prod_year}</td>
                      <td>{data.price_for_24h}€</td>
                      <td>{data.rented ? "Yes" : "No"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Tab>
        <Tab eventKey="Car Renters" title="Car Renters">
          <Container>
            <Table striped bordered hover className="border rounded">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Cars Renting </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                      <td>{data.cars}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Tab>
        <Tab eventKey="addCar" title="Add New Car">
          <AddCarForm />
        </Tab>
      </Tabs>
    </>
  );
};

export default CompanyDashboard;
