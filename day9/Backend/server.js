require("dotenv").config();
const connectToDB = require("./src/config/database.js");
const app = require("./src/app.js");

connectToDB();

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
