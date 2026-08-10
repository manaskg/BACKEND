const express = require("express");
const authController = require("../controllers/auth.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js");

const authRouter = express.Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

authRouter.get("/get-me",identifyUser, authController.getMeController);

module.exports = authRouter;
