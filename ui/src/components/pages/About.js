import {Container, Col, Row, Nav, Navbar} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import './Dashboard.css'
import './About.css'
import CarCard from "../CarCard";
import OnlineUsers from '../../chat/OnlineUsers'
import Slideshow from '../Slideshow'

const About = () => {
  return (
    <div>
        <h1 style={{textAlign:'center', fontWeight:'bolder'}}>About Us</h1>
        <Slideshow></Slideshow>
        <br></br>
        <h3>Who Are We?</h3><hr></hr>
        <p>OTR is a company dedicated to providing you with efficient low-cost
           car hire services . We take pride in offering reliable and flexible services 
           with our All Inclusive Price Policy with No hidden costs or last minute surprises.
           Since the beginning we have built up excellent relationships with our customers. We know the
           importance of this, and believe in doing our utmost to make sure you receive the help you
           need before, during and after the booking.
        </p>
        <h3>Top Quality Service</h3><hr></hr>
        <p>We provide Top Quality car rental services with a great variety of locations and car types
           to suit both your requirements and your budget.We only use trustworthy car hire companies 
           for your peace of mind and firmly believe that the only way you will book with us again 
           is by making sure you get the best possible service. We will not charge you extra costs 
           nor will we try to sell you anything you do not need. The price you see is the price you 
           will pay!We do not want to scare you, but the car hire business has plenty of “CowBoys” 
           whose only aim is to close the sale, get your money and then forget about it. 
           Please, if you choose any other car hire company make sure you read the small print.
        </p>
        <h3>Company Staff</h3><hr></hr>
        <p>Our most important asset after you is our workforce whose hard work and dedication have brought CarJet.com to the level of success we enjoy today.
           Our well-trained people have only one aim, to provide you with the help you need before, during and after the booking.
           We are constantly learning about new technologies as they come into play. The result is a workforce that is highly knowledgeable in all aspects of the business and can assist you in the best possible way. We are truly a team.
        </p>
    </div>
  )
}

export default About