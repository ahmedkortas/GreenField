const express = require("express");
let PORT = 3000;
const bodyParser = require("body-parser");
let app = express();
let dataQueue = require("./dataQuerry.js");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/Ads", (req, res) => {
  console.log(req);
  res.send("hey");
});

app.listen(PORT, () => {
  console.log("server is connected");
});
