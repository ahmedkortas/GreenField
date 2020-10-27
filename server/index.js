const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/dbConfig")
let app = express();
let PORT = 3000;




app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/Task',(req,res)=>{
  db(req.body).save().then((g)=>res.json(g))
})

app.post('/',(req,res)=>{
  db(req.body).save().then((g)=>res.json(g))
})


app.listen(PORT, () => {
  console.log("server is connected");
});
