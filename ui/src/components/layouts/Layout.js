import React from 'react'
import NavigationBar from './NavigationBar'

const Layout = ({children, loggedIn, logout}) => {
  return (
    <div>
        <NavigationBar loggedIn={loggedIn} logout={logout}/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout