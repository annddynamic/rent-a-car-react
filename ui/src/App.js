import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
   <Layout>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/register" element={<Register />} />
     </Routes>
   </Layout>
  );
}
{/* <Link to="/about">About</Link> */}
export default App;
