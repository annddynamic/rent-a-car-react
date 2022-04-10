const router = require("express").Router();
const Car = require("../models/car");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//GET ALL CARS
router.get("/" , async (req, res) => {
	try {
		const cars = await Car.find();
        res.json(cars);

	} catch (error) {
		res.json({ message: error});
	}
});

//GET ONE SPECIFIC CAR
router.get("/:carId", async(req,res) => {
	// console.log(req.params.carId);
	try{
		const specificCar = await Car.findById(req.params.carId);
		res.json(specificCar);
	}catch (error) {
		res.json({ message: error });
	}

});

//DELETE SPECIFIC CAR
router.delete("/:carId", async(req,res) =>{
	try{
		const deletedCar = await Car.findByIdAndDelete(req.params.carId)
		res.json(deletedCar);
	}catch (error) {
		res.json({ message: error });
	}
});

//UPDATE SPECIFIC CAR
router.patch("/:carId", async(req,res) =>{
	try{
		const updatedCar = await Car.findByIdAndUpdate(
			req.params.carId,
			req.body,
			{runValidators: true }
	
		);
		res.json(updatedCar);
	}catch (error) {
		res.json({ message: error });
	}
});

// ADD A CAR TO DB
router.post("/", async (req, res) => {
	
	// console.log(req.body)
	const car = new Car({
		car_model: req.body.car_model,
		car_model_type:req.body.car_model_type,
		prod_year: req.body.prod_year,
		price_for_24h: req.body.price_for_24h,
		transmission: req.body.transmission,
		max_speed: req.body.max_speed,
		doors: req.body.doors,
		air_conditioning: req.body.air_conditioning,
		start_day_booking: req.body.start_day_booking,
		finish_day_booking: req.body.finish_day_booking,
		miles: req.body.miles
	});

	try{
		const savedCar = await car.save();
		res.json(savedCar)

	}catch(error){
		res.json({message:error});
	}
});

module.exports = router;
