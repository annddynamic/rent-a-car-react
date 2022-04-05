import  { useEffect, useState } from 'react'
import {Container, Col, Row} from 'react-bootstrap'

const Dashboard = () => {
  const[user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
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