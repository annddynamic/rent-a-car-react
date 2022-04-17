const router = require("express").Router();
const AuthController = require("../controllers/auth")

// LOGIN ROUTE 
router.post("/", AuthController.handle_login);

module.exports = router;
