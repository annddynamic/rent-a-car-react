const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	salt: {type: String, required: true}
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

const validateChangePassword = (data) => {
	console.log(data)
	const schema = Joi.object({
		errorMessage: Joi.any(),
		errorMessageMatch: Joi.any(),
		email: Joi.string().required(),
		currentPassword: Joi.string().required(),
		newPassword: Joi.string().required(),
		confirmNewPassword: Joi.string().required().equal(Joi.ref('newPassword'))
		.label('Confirm password')
		.options({ messages: { 'any.only': '{{#label}} does not match'} }),
	})
	return schema.validate(data);
}

const validateChangeDetails = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
	})
	return schema.validate(data);
}

module.exports = { User, validate, validateChangePassword, validateChangeDetails };
