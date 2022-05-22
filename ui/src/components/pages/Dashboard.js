import {Container, Col, Row, Nav, Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './Dashboard.css'
import pic from '../../images/babloki.jpg'
import CarCard from "../CarCard";
import OnlineUsers from '../../chat/OnlineUsers'

const Dashboard = () => {
  
  const user = useSelector(state => state.user)
  const cars = useSelector(state => state.cars)
  return (
    <div>
        <Row>
          <Col className='text-center border-1' md={6}>
              <div>
                <img src={pic} style={{height:"26vh",width:"26vh", borderRadius:"50%"}} alt="" />
              </div>
          </Col>
          <Col md={6}>
              <h2>{user.firstName} {user.lastName}</h2>     
              <h3 className='text-primary'>Web developer</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet.</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center border-1' md={4}>
              <h1>Work links</h1>     
          </Col>
          <Col md={5}>
            <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Col md={10}>
            <Row>
              {cars.filter((car) => (car.rentedBy === user._id)).map((car, index) => (
                <CarCard car={car} key={index} />
               ))}
            </Row>
          </Col>
    </div>
  )
}

export default Dashboard