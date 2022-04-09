import  { useState } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  
  const user = useSelector(state => state.user)

  return (
    <div>
        <Container className='text-center'>
            <h1>Info</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
        </Container>
    </div>
  )
}

export default Dashboard