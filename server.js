const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3005, () => {
  console.log("server is listening at 3005");
});
