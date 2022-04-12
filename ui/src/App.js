import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Dashboard from "./components/pages/Dashboard";
import Cars from "./components/pages/Cars";
import { Routes, Route } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { setLogin } from "./state/actions/loginActions";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import { setUser } from "./state/actions/userActions";
import { setCars } from "./state/actions/carsActions";
import { useEffect } from "react";

const App =() => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLogin(JSON.parse(localStorage.getItem("loggedIn")),localStorage.getItem("token")))
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
    dispatch(setCars(JSON.parse(localStorage.getItem("cars"))))

  }, []);

  const isLogged = useSelector(state => state.isLogged.loggedIn)

  return (
   <Layout>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        <Route path="/dashboard" element= {
          <ProtectedRoute loggedIn={isLogged}>
            <Dashboard />
          </ProtectedRoute > 
        } />
         <Route path="/cars" element= {
          <ProtectedRoute loggedIn={isLogged}>
            <Cars />
          </ProtectedRoute > 
        } />
     </Routes>
   </Layout>
  );
}

export default App;
