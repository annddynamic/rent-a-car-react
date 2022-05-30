import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import Cars from "./components/pages/Cars";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import ChangeDetails from "./components/pages/ChangeDetails";
import ChangePassword from "./components/pages/ChangePassword";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
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
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
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
        <Route
          path="/company-dashboard"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/dashboard/:id"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <Car />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/ChangeDetails"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <ChangeDetails />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/ChangePassword"
          element={
            <ProtectedRoute loggedIn={isLogged}>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
