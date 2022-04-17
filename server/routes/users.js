const router = require("express").Router();
const UsersController = require("../controllers/users")

router.post("/", UsersController.add_user);

module.exports = router;
