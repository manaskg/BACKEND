const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists"],
    required: [true, "User name is requied"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/hidemkg/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
