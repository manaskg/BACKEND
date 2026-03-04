const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model.js");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists with this email",
    });
  }

  const user = await userModel.create({
    email,
    password,
    name,
  });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
    token,
  });
});

authRouter.get("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({
    message: "here is your cookies",
  });
});

module.exports = authRouter;
