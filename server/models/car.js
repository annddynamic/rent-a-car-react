const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const carSchema = new mongoose.Schema({
	car_model: { type: String, required: true },
    car_series: { type: String, required: true },
    car_type: { type: String, required: true },
	prod_year: { type: Number, required: true },
	price_for_24h: { type: Number, required: true },
	country: { type: String, required: true },
	seats: { type: Number, required: true },
    transmission: { type: String, required: true },
    max_speed: { type: Number, required: true },
    doors: { type: Number, required: true },
    air_conditioning: { type: Boolean, required: true },
    start_day_booking: { type: Date, default: null},
    finish_day_booking: { type: Date, default: null},
    miles: { type: Number, required: true },
    rented: { type: Boolean,  default: false}
    
});


const Car = mongoose.model("car", carSchema);


module.exports = Car;
