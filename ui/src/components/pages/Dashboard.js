import {Container, Col, Row, Nav, Navbar} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import './Dashboard.css'
import pic from '../../images/babloki.jpg'
import CarCard from "../CarCard";
import OnlineUsers from '../../chat/OnlineUsers'

const Dashboard = () => {
  
  const user = useSelector(state => state.user)
  const cars = useSelector(state => state.cars)
  const token = useSelector((state)=>state.isLogged.token)

  return (
    <div>
        <Row>
          <Col className='text-center border-1' md={4}>
              <div>
                <img src={pic} style={{height:"26vh",width:"26vh", borderRadius:"50%"}} alt="" />
              </div>
          </Col>
          <Col md={8}>
              <br></br>
              <h2 className='text-center' style={{display:"inline-block !important"}}>Welcome back {user.firstName} {user.lastName}</h2>     
              <h3 className='text-primary'>Job Title: Web developer</h3>
              <p className='text-secondary text-center'>Lorem ipsum dolor sit amet.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='text-center border-1' md={4}>
              <h1>My Cars</h1>     
          </Col>
        </Row>
        <Col md={10}>
            <Row>
              {cars.filter((car) => (car.rentedBy === user._id || car.company === user._id)).map((car, index) => (
                <CarCard  car={car} key={index} />
               ))}
            </Row>
          </Col>
    </div>
  )
}

export default Dashboard