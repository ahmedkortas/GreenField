let route = require("express").Router();
let { createUser, findOnebyEmail } = require("../../db/user.js");

route.post("/SingUp", (req, res) => {
  let obj = {
    userName: req.body.userName,
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
    obj.userName === undefined
  ) {
    res.status(301).send();
  } else {
    createUser(obj)
      .then((data) => {
        res.send(data);
      })

      .catch((err) => {
        res.send(err);
      });
  }
});

route.post("/info", (req, res) => {
  findOnebyEmail(req.body).then((emai) => {
    res.send(emai);
  });
});

route.post("/SignIn", (req, res) => {
  let obj = {
    email: req.body.email,
    password: req.body.password,
  };
  findOnebyEmail(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("does not exists");
    });
});

module.exports = route;
