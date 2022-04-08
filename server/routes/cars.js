const router = require("express").Router();
const Car = require("../models/car");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
	try {
		const cars = await Car.find();
		if (!cars)
			return res.status(404).send({ message: "Ska cars!" });
        res.status(200).send({cars: cars });

	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/", async (req, res) => {
	
	console.log("created schema")
});

module.exports = router;
