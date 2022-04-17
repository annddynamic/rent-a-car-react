const CarsController = require('../controllers/cars')
const router = require("express").Router();

// 		**** ALL ROUTES ARE PROTECTED*****

//GET ALL CARS
router.get("/", CarsController.get_all);

//GET ONE SPECIFIC CAR
router.get("/:carId", CarsController.get_by_id);

//DELETE SPECIFIC CAR
router.delete("/:carId", CarsController.delete_by_id);

//UPDATE SPECIFIC CAR
router.patch("/:carId", CarsController.update_by_id);

// ADD A CAR TO DB
router.post("/", CarsController.add_car);

module.exports = router;
