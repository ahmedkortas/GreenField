const express = require("express");
const {create, findByEmail} = require("../db/user");
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
  findByEmail(req.body.email)
    .then(data => {
     
      
      create(req.body).then().catch();
    })
    .catch();


  // user(req.body).save().then(g =>console.log(g))
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
