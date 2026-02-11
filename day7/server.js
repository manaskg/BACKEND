const connectToDB = require("./src/config/database.js");
const app = require("./src/app.js");
require("dotenv").config();

connectToDB();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
