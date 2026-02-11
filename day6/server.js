const app = require("./src/app.js");
const mongoose = require("mongoose");
require("dotenv").config();

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database is connected...");
    })
    .catch((err) => console.log(err));
}

connectToDB();

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
