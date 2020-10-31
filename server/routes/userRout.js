let route = require("express").Router();
const { rated } = require("../../db/jobDone.js");
let { createUser, findOnebyEmail, rate } = require("../../db/user.js");

route.post("/SingUp", (req, res) => {
  let obj = {
    userName: req.body.userName,
    email: req.body.email,
    gender: req.body.gender,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    age: req.body.age,
    rating: 5,
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

route.put("/update", (req, res) => {
  console.log(req.body);
  let obj = {
    email: req.body.employeeEmail,
  };
  findOnebyEmail(obj).then((emai) => {
    console.log(req.body.rating + emai.rating);
    let obj1 = {
      employeeEmail: req.body.employeeEmail,
      rating: (Number(req.body.rating) + Number(emai.rating)) / 2,
    };
    rate(obj1).then((data) => {
      rated(req.body.description).then((data) => {
        res.send(data);
      });
    });
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
