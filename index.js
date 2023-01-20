const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(__dirname, "build", "index.html");
});
app.listen(5000, () => {
  console.log("running on port 5000", "||", "index.js", "line-", 8);
});
