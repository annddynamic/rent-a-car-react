import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import Cars from "./components/pages/Cars";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./state/actions/loginActions";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import { setUser } from "./state/actions/userActions";
import { setCars } from "./state/actions/carsActions";
import { useEffect } from "react";
import Car from "./components/pages/Car";
import CompanyDashboard from "./components/pages/RentCompanyPages/CompanyDashboard";

const App = () => {
  const isLogged = useSelector((state) => state.isLogged.loggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cars"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <Cars />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cars/:id"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <Car />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
