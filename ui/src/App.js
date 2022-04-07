import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import { Routes, Route, Link } from "react-router-dom";
import {useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { setLogin } from "./state/actions/loginActions";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute from "./components/utils/ProtectedRoutes";

function App() {

  const dispatch = useDispatch();
  
  dispatch(setLogin(JSON.parse(window.localStorage.getItem('loggedIn'))))
  const isLogged = useSelector(state => state.isLogged)
  
  return (
   <Layout>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element= {
          <ProtectedRoute loggedIn={isLogged}>
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
