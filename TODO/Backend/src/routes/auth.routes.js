const { Router } = require("express");
const authController = require("../controllers/auth.controller.js");

const router = Router();

router.post("/register", authController.registerUser);
router.post("/login");
router.get("/logout");

module.exports = router;
