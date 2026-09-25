const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isAlreadyRegistered = await userModel.findOne({
    $or: [{ email, username }],
  });

  if (isAlreadyRegistered) {
    return res.status(400).json({
      message: "User with the same email or username already registered",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "user registered successfully",
    user: {
      id: user_id,
      usrname: user.username,
      email: user.email,
    },
  });
}

async function loginUser(params) {}

module.exports = { registerUser };
