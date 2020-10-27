const express = require("express");
const bodyParser = require("body-parser");
const Jp = require("../db/jobsPending");
const CV = require("../db/cv")
let app = express();
let user = require("../db/user.js");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/Ads", (req, res) => {
  res.send(req.body);
});

app.post('/',(req,res)=>{
  console.log(req.body)
  Jp(req.body).save().then((g)=>res.json(g))
})


app.post('/cv',(req,res)=>{
  console.log(req.body)
  CV(req.body).save().then((g)=>res.json(g))
})

app.listen(3000, () => {
  console.log("server is connected");
});
