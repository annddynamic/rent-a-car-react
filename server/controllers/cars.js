const Car = require("../models/car");

exports.get_all = async (req, res) => {
	try {
		const cars = await Car.find();
        res.json(cars);

	} catch (error) {
		res.json({ message: error});
	}
}

exports.add_car = async (req, res) => {
	
	const car = new Car({
		car_model: req.body.car_model,
		car_series :req.body.car_series,
		car_type:req.body.car_type,
		prod_year: req.body.prod_year,
		price_for_24h: req.body.price_for_24h,
		country: req.body.country,
		seats:req.body.seats,
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
}

exports.get_by_id =  async(req,res) => {
	try{
		const specificCar = await Car.findById(req.params.carId);
		res.json(specificCar);
	}catch (error) {
		res.json({ message: error });
	}
}

exports.delete_by_id = async(req,res) =>{
	try{
		const deletedCar = await Car.findByIdAndDelete(req.params.carId)
		res.json(deletedCar);
	}catch (error) {
		res.json({ message: error });
	}
}

exports.update_by_id = async(req,res) =>{
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
}