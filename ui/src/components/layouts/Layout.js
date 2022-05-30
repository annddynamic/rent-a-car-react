import React from 'react'
import OnlineUsers from '../../chat/OnlineUsers'
import NavigationBar from './NavigationBar'
import {Row, Col, Container} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const location = useLocation();
  const isLogged = useSelector((state) => state.isLogged.loggedIn);
  let routes = ['/FAQ', '/about'];
  return (
    <div>
        <NavigationBar/>
        {(isLogged && !routes.includes(location.pathname))?
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