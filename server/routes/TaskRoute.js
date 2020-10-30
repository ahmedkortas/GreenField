let route = require("express").Router();
let { NewAd, deletPending, findAll } = require("../../db/jobsPending.js");
let { findOnebyEmail } = require("../../db/user.js");
let {
  NewAdApplications,
  findAllJa,
  deletAccepted,
} = require("../../db/jobsApplication.js");
let {
  CreateJobInProgress,
  findAllJobinProg,
} = require("../../db/jobsProgress.js");

route.get("/find", (req, res) => {
  findAll()
    .then((things) => res.send(things))
    .catch((error) => res.send({ error }));
});

//create pending job
route.post("/create", (req, res) => {
  var obj = req.body;
  findOnebyEmail(obj)
    .then((data) => {
      obj.address = data.address;
      NewAd(obj);
      console
        .log(obj, "here")
        .then((things) => {
          res.send(things);
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

//create new appplication
route.post("/aplly", (req, res) => {
  NewAdApplications(req.body)
    .then((things) => {
      console.log(things);
      res.send(things);
    })
    .catch((err) => res.send(err));
});

//finds all the jobs that i applied for
route.post("/jobApplication/employee", (req, res) => {
  findAllJa(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
});

//finding job in prog
route.post("/findProg", (req, res) => {
  console.log(req.body.employeeEmail);
  findAllJobinProg(req.body.employeeEmail).then((data) => {
    console.log(data);
    res.send(data);
  });
});

//creat job in prog and change other fields
route.post("/Progress", (req, res) => {
  let employeeEmail = req.body.employeeEmail;
  findAllJa(employeeEmail)
    .then((employees) => {
      CreateJobInProgress(employees[0])
        .then((jobInProgress) => {
          deletAccepted(jobInProgress);
          deletPending(jobInProgress);
          res.send(jobInProgress);
        })
        .catch((err) => res.send("err"));
    })
    .catch((err) => res.send("does"));
});

module.exports = route;
