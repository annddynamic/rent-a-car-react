const { User, validateChangePassword, validateChangeDetails, validate } = require("../models/user");
const bcrypt = require("bcrypt");

exports.add_user = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword, salt: salt }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

exports.change_password = async (req, res) => {
	try {
		const body = req["body"];
		 const { error } = validateChangePassword(body);
		 if (error){
			return res.status(400).send({ message: error.details[0].message });
		 }

		const user = await User.findOne({ email: body["email"] });

		if (user == null)
			return res
				.status(404)
				.send({ message: "User does not exist!" });

		const salt = user.salt;
		const hashPassword = await bcrypt.hash(body["currentPassword"], salt);

		if (hashPassword != user.password)
			return res
				.status(404)
				.send({ message: "Current password is wrong!" });
		
		const hashNewPassword = await bcrypt.hash(body["newPassword"], salt);
		
		user.password = hashNewPassword;
		user.save();

		res.status(201).send({ message: "Password changed successfully" }); 
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

exports.change_details = async (req, res) => {
	try {
		const body = req["body"];
		
		var id = body["id"];
		var password = body['password']
		delete body['id'];
		delete body['password'];
		const { error } = validateChangeDetails(body);
		if (error){
			return res.status(400).send({ message: error.details[0].message });
		}
		var emailInUse = await User.findOne({ email:body["email"] }) != null;
		if(emailInUse){
			return res.status(400).send({ message: "This email is already in use!" });
		}

		const user = await User.findOne({ _id:id});
		if (user == null)
			return res
				.status(404)
				.send({ message: "User does not exist!" });

		const salt = user.salt;
		const hashPassword = await bcrypt.hash(password, salt);

		if (hashPassword != user.password)
			return res
				.status(404)
				.send({ message: "Current password is wrong!" });

		user.email = body["email"];
		user.firstName = body["firstName"];
		user.lastName = body["lastName"];
		user.save();

		res.status(201).send({ message: "Details changed successfully" }); 
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
}