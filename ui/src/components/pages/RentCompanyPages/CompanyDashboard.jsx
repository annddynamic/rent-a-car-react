import React, { useState } from "react";
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

const CompanyDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onToatalOwnersClick = () => {
    console.log("onToatalOwnersClick");
  };

  // create dummy data for table with id, first name, last name email address, cars renting
  const tempData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },

    {
      id: 5,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },
    {
      id: 6,
      firstName: "John",
      lastName: "Doe",
      email: "asd",
      cars: "2",
    },
  ];

  return (
    <>
      <div className="d-flex flex-row justify-content-around  py-3 ">
        <InfoCard
          title="Total car owners"
          value={12}
          moreInfo={() => onToatalOwnersClick()}
        />

        <InfoCard title="Total car owners" value={12} />

        <InfoCard title="Total car owners" value={12} />
      </div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey={1} title="Car Renters">
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
                {tempData.map((data) => {
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
        <Tab eventKey="Cars" title="Cars">
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
                {tempData.map((data) => {
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
