import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Pagination,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleLeft,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCars } from "../../state/actions/carsActions";
import "./Cars.css";
import CarCard from "../CarCard";
import OnlineUsers from "../../chat/OnlineUsers";

const Cars = () => {
  // get cars from state (redux)
  const cars = useSelector((state) => state.cars)
  const token = useSelector((state)=>state.isLogged.token)

  const dispatch = useDispatch();
  
  const fetchCars = async () => {
    const url = "http://localhost:8080/api/cars";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let cars = res.data;
        console.log(cars)
        dispatch(setCars(cars));
      });
  };
  
  useEffect(() => {
    fetchCars()
  },[]);
  
  // set the first initial items displayed per page (6)
  // const [itemsPerPage, setItemsPerPage] = useState(cars.slice(0,6));

  const [carsTypeShown, setCarsTypeShown] = useState(true);

  const [transmitionTypeShown, setTransmitionTypeShown] = useState(true);

  const [userReviewTypeShown, setuserReviewTypeShown] = useState(true);

  const [allFilteredCars, setAllFilteredCars] = useState([]);

  const [transmissionType, setTransmissionType] = useState({
    manual: true,
    automatic: true,
  });
  console.log(cars)
  // active page, page 1
  const [active, setActivePage] = useState(1);

  // formula for calculating number of pages based on the cars in array
  // let items = [];
  // for (let number = 1; number <= Math.ceil(cars.length / 6); number++) {
  //   items.push(number);
  // }

  // const [pageNumber, setPageNumber] = useState(items);

  // const setPagination = (size) => {
  //   let items = [];
  //   for (let number = 1; number <= Math.ceil(size / 6); number++) {
  //     items.push(number);
  //   }
  //   setPageNumber(items);
  // };

  // // sets particular Items per page based on the number clicked
  // const setActive = (page) => {
  //   setActivePage(page);

  //   if (allFilteredCars.length === 0) {
  //     setItemsPerPage(cars.slice((page - 1) * 6, page * 6));
  //   } else {
  //     setItemsPerPage(allFilteredCars.slice(page * 6 - 6, page * 6));
  //   }
  // };

  // Get unique car types
  console.log(cars)
  const types = [...new Set(cars.map((car) => car.car_type))];

  // Fill all car type checkboxes with false
  const [checkedState, setCheckedState] = useState(
    new Array(types.length).fill(false)
  );

  const handleOnChange = (position) => {
    console.log(position);
    // const updatedCheckedState = checkedState.map((item, index) =>
    //   index === position ? !item : item
    // );
    // setCheckedState(updatedCheckedState);
    // let checker = (arr) => arr.every((v) => v === false);

    // if (checker(updatedCheckedState)) {
    //   setItemsPerPage(cars.slice(0, 6));
    //   setPagination(cars.length);
    // } else {
    //   let filteredCars = [];
    //   console.log(updatedCheckedState);

    //   cars.forEach((car) => {
    //     updatedCheckedState.forEach((checked, index) => {
    //       if (checked) {
    //         if (car.car_type === types[index]) {
    //           filteredCars.push(car);
    //         }
    //       }
    //     });
    //   });
    //   console.log(checkedState);

    //   setItemsPerPage(filteredCars.slice(0, 6));
    //   setPagination(filteredCars.length);
    //   setAllFilteredCars(filteredCars);
    //   setActivePage(1);
    // }
  };

  const handleTransmisionFilterChange = (id) => {
    // if (id === 0) {
    //   setTransmissionType({
    //     manual: !transmissionType.manual,
    //     automatic: transmissionType.automatic,
    //   });
    //   allFilteredCars.filter((car) => car.transmission_type !== "Automatic");
    //   console.log(allFilteredCars);
    // } else {
    //   setTransmissionType({
    //     automatic: !transmissionType.automatic,
    //     manual: transmissionType.manual,
    //   });
    // }
  };

  // const h = () => {
  //   console.log(transmissionType);
  // };
  return (
    <div className="cars-layout">
      <Container style={{ borderRadius: "10px" }} className="mt-4 bg-primary">
        <Form style={{ padding: "20px" }}>
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
                onClick={() => setCarsTypeShown(!carsTypeShown)}
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
                    {types.map((type, index) => (
                      <Form.Check
                        key={index}
                        value={type}
                        onChange={handleOnChange}
                        type="checkbox"
                        label={type}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
              <p
                onClick={() => setTransmitionTypeShown(!transmitionTypeShown)}
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
                    <Form.Check
                      key={0}
                      checked={!transmissionType.manual}
                      onChange={() => handleTransmisionFilterChange(0)}
                      value={transmissionType.manual}
                      type="checkbox"
                      label="Manual"
                    />
                    <Form.Check
                      key={1}
                      onChange={() => handleTransmisionFilterChange(1)}
                      checked={!transmissionType.automatic}
                      value={transmissionType.automatic}
                      type="checkbox"
                      label="Automatic"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <p
                onClick={() => setuserReviewTypeShown(!userReviewTypeShown)}
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
                    <Form.Check type="checkbox" label="Good" />
                    <Form.Check type="checkbox" label="Bad" />
                    <Form.Check type="checkbox" label="Excellent" />
                    <Form.Check type="checkbox" label="Fair" />
                    <Form.Check type="checkbox" label="Poor" />
                  </div>
                </div>
              ) : (
                ""
              )}
            </Container>
          </Col>
          <Col md={10}>
            <Row>
              {cars.map((car, index) => (
                <CarCard car={car} key={index} />
               ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cars;
