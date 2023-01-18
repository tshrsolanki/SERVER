const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use("/", express.static(path.join(__dirname, "build")));
app.listen(3000, () => {
  console.log("running on port 3000", "||", "index.js", "line-", 8);
});
