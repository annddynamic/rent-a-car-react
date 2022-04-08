const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const carSchema = new mongoose.Schema({
	car_model: { type: String, required: true },
    car_model_type: { type: String, required: true },
	prod_year: { type: Number, required: true },
	price_for_24h: { type: Number, required: true },
    transmission: { type: String, required: true },
    max_speed: { type: Number, required: true },
    doors: { type: Number, required: true },
    air_conditioning: { type: String, required: true },
    start_day_booking: { type: Date, required: true },
    finish_day_booking: { type: Date, required: true },
    miles: { type: Number, required: true }
    
});


const Car = mongoose.model("car", carSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

module.exports = Car;
