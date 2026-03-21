const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to mongoodb");
  });
}

module.exports = connectDB;
