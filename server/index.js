require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const carsRoutes = require("./routes/cars");

var bodyParser = require('body-parser')

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
app.use("/api/cars", carsRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
