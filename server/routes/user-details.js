const router = require("express").Router();
const UsersController = require("../controllers/users")

router.post("/change-password", UsersController.change_password);
router.post("/change-details", UsersController.change_details);

module.exports = router;
