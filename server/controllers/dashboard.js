const Car = require("../models/car");

exports.get_by_id = async (req, res) => {
    try {
      const specificCar = await Car.findById(req.params.carId);
      console.log(specificCar);
      res.json(specificCar);
    } catch (error) {
      res.json({ message: error });
    }
  };