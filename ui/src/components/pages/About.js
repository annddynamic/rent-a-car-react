import {Container, Col, Row, Nav, Navbar} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import './Dashboard.css'
import CarCard from "../CarCard";
import OnlineUsers from '../../chat/OnlineUsers'
import Slideshow from '../Slideshow'

const About = () => {
  
  const user = useSelector(state => state.user)
  const cars = useSelector(state => state.cars)
  const token = useSelector((state)=>state.isLogged.token)

  return (
    <div>
        <h1>About us page</h1>
        <Slideshow></Slideshow>
    </div>
  )
}

export default About