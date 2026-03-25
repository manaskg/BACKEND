const express = require("express");
const userModel = require("../models/user.model");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, username, password, bio, profileImage } = req.body;

  const isUserExists = userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserExists) {
    return res.status(409).json({
      message:
        "User already exists" +
        (isUserExists.email == email
          ? "Email already exists"
          : "Username already exists"),
    });
  }
});

module.exports = authRouter;
