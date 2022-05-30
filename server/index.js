require("dotenv").config();
const http = require("http")
const express = require("express");
const app = express();
const server = http.createServer(app)
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


const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})


io.on("connection", (socket) => {
  console.log("conn received")
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})



const port = process.env.PORT || 8080;
server.listen(port, console.log(`Listening on port ${port}...`));
