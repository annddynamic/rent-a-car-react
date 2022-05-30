require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./configs/db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const carsRoutes = require("./routes/cars");
const dashboardRoutes = require("./routes/dashboard");
const middleware = require("./routes/validate")
const userDetailsRoutes = require("./routes/user-details");

var bodyParser = require('body-parser');
const { application } = require("express");

// database connection
connection();

// middlewares
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/register", userRoutes);
app.use("/api/login", authRoutes);

// protected routes
//qitu e kom hek middleware 
app.use("/api/cars",  carsRoutes);
app.use("/dashboard", dashboardRoutes);

app.use("/api/user", userDetailsRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
