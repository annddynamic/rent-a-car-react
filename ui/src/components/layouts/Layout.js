import React from 'react'
import OnlineUsers from '../../chat/OnlineUsers'
import NavigationBar from './NavigationBar'
import {Row, Col, Container} from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Layout = ({children}) => {

  const isLogged = useSelector((state) => state.isLogged.loggedIn);

  return (
    <div>
        <NavigationBar/>
        {isLogged ?
           <Container>
         <Row>
            <Col md={9}>{children}</Col>
            <Col md={3}><OnlineUsers/></Col>
        </Row>    
           </Container> :
        <main>
            {children}
        </main>}
    </div>
  )
}

export default Layout