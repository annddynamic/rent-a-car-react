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
  FaTimesCircle,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import sample1 from "../../images/sample1.jpeg";
import { setCars } from "../../state/actions/carsActions";
import "./Cars.css";
import CarsReducer from "../../state/reducers/Cars";

const Cars = () => {
  // get cars from state (redux)
  const cars = useSelector((state) => state.cars) ||[];
  const dispatch = useDispatch();

  const fetchCars = async () => {
    const url = "http://localhost:8080/api/cars";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const cars = res.data;
        dispatch(setCars(cars))
        localStorage.setItem("cars", JSON.stringify(cars));
      });
  };

  useEffect(() => {
    fetchCars()
  },[]);

  // set the first initial items displayed per page (6)
  const [itemsPerPage, setItemsPerPage] = useState(cars.slice(0, 6));

  const [carsTypeShown, setCarsTypeShown] = useState(true);

  const [transmitionTypeShown, setTransmitionTypeShown] = useState(true);

  const [userReviewTypeShown, setuserReviewTypeShown] = useState(true);

  // active page, page 1
  const [active, setActivePage] = useState(1);

  // formula for calculating number of pages based on the cars in array
  let items = [];
  for (let number = 1; number <= Math.ceil(cars.length / 6); number++) {
    items.push(number);
  }

  const [pageNumber, setPageNumber] = useState(items);

  const setPagination = (size) => {
    let items = [];
    for (let number = 1; number <= Math.ceil(size / 6); number++) {
      items.push(number);
    }
    setPageNumber(items);
  };

  // sets particular Items per page based on the number clicked
  const setActive = (page) => {
    setActivePage(page);
    setItemsPerPage(cars.slice(page * 6 - 6, page * 6));
  };

  // Get unique car types
  const types = [...new Set(cars.map((car) => car.car_type))];

  // Fill all car type checkboxes with false
  const [checkedState, setCheckedState] = useState(
    new Array(types.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);

    let filteredCars = [];
    updatedCheckedState.forEach((checked, index) => {
      if (checked) {
        cars.forEach((car) => {
          if (car.car_type == types[index]) {
            filteredCars.push(car);
          }
        });
      }
    });
    setItemsPerPage(filteredCars.slice(0, 6));
    setPagination(filteredCars.length);
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
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
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
                    <Form.Check type="checkbox" label="Transmission" />
                    <Form.Check type="checkbox" label="Manual" />
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
                <Col key={index} className="mt-2" md={4}>
                  <Card style={{ cursor: "pointer" }}>
                    <Card.Img variant="top" src={sample1} />
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
              ))}
              <Pagination>
                {pageNumber.map((item) => (
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
