import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute from "./components/utils/ProtectedRoutes";

function App() {
  const[loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(JSON.parse(window.localStorage.getItem('loggedIn')));
  }, []);

  const login =()=>{
    setLoggedIn(true)
  }
  const logout =()=>{
    setLoggedIn(false)
  }
  
  return (
   <Layout loggedIn = {loggedIn} logout={logout}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login login={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element= {
          <ProtectedRoute loggedIn={JSON.parse(window.localStorage.getItem('loggedIn'))}>
            <Dashboard />
          </ProtectedRoute > 
        } />
       <Route path="*" element={<p>There's nothing here: 404!</p>} />
     </Routes>
   </Layout>
  );
}
{/* <Link to="/about">About</Link> */}
export default App;
