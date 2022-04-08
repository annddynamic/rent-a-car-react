import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import { Routes, Route } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { setLogin } from "./state/actions/loginActions";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import { setUser } from "./state/actions/userActions";

const App =() => {

  const dispatch = useDispatch();
  
  dispatch(setLogin(JSON.parse(window.localStorage.getItem('loggedIn'))))
  dispatch(setUser(JSON.parse(localStorage.getItem("user"))))

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

export default App;
