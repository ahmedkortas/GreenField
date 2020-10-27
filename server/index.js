const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/dbConfig")
let app = express();
let dataQueue = require("./dataQuerry.js");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/Ads", (req, res) => {
  console.log(req);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server is connected");
});
