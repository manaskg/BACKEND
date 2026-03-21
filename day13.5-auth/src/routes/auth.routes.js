const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const crypto = require("crypto");

/**
 * POST: /api/auth/register
 */

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password: crypto.createHash("md5").update(password).digest("hex"),
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
});

/**
 * get-me
 */

authRouter.get("/get-me", async (req, res) => {
  const token = req.cookies.jwt_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded.id);

  res.json({
    name: user.name,
    email: user.email,
  });
});

/**
 * login
 */

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found with this email address",
    });
  }
  const hash = crypto.createHash("md5").update(password).digest("hex");
  const isPasswordValid = user.password === hash;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Password is invalid" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token);
  res.status(201).json({ message: "user logged in", user });
});

module.exports = authRouter;
