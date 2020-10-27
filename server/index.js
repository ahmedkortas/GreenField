const express = require("express");

let PORT = 3000;

const bodyParser = require("body-parser");
const Jp = require("../db/jobsPending");
let app = express();
let user = require("../db/user.js");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/Ads", (req, res) => {
  res.send(req.body);
});

app.post("/api/SignUp", function (req, res) {
  console.log(req.body);
  res.send("hi");
  // let obj = req.body;
  // SignUp.create(obj).then((data) => {
  //   str = JSON.stringify(data);
  //   res.send(data);
  // });
});

app.listen(PORT, () => {
  console.log("server is connected and listning ya derwish ");
});
