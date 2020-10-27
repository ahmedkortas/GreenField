const express = require("express");
let PORT = 3000;
const bodyParser = require("body-parser");
let app = express();
let user = require("../db/user.js");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/Ads", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("server is connected");
});
