let route = require("express").Router();
let { createUser, findOnebyEmail } = require("../../db/user.js");

route.post("/SingUp", (req, res) => {
  // console.log("qweqweqwe");
  let obj = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    age: req.body.age,
  };
  if (
    obj.email === undefined ||
    obj.password === undefined ||
    obj.name === undefined
  ) {
    res.status(301).send();
  } else {
    createUser(obj)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => { 
        res.send("error");
      });
  }
});

route.post("/Login", (req, res) => {
  let obj = {
    email: req.body.email,
    password: req.body.password  
  };
  if (
    obj.email === null ||
    obj.password === null 
  ) {
    res.status(301).send();
  } else {
    findOnebyEmail(obj)
      .then((data) => {
        if(email === data.email && password=== data.password){
        res.send(data);
        }
      })
      .catch((err) => {
        res.send("doesn't exist");
      });
  }
});

module.exports = route;
