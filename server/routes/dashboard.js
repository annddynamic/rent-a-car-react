const CarsController = require('../controllers/dashboard');
const router = require("express").Router();

//GET ALL CARS
router.get("/:carId", CarsController.get_by_id);


module.exports = router;