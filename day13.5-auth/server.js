require("dotenv").config();
const app = require("./src/app.js");
const connectDB = require("./src/config/database.js");

connectDB();

app.listen(3000, () => {
  console.log("server is listning at port 3000");
});
