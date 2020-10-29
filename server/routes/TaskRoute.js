let route = require("express").Router();
let { NewAd, findAll, deletPending } = require("../../db/jobsPending.js");
let { findOnebyEmail } = require("../../db/user.js");
let {
  NewAdApplications,
  findAllJa,
  deletAccepted,
} = require("../../db/jobsApplication.js");
let { CreateJobInProgress } = require("../../db/jobsProgress.js");

route.get("/find", (req, res) => {
  findAll()
    .then((things) => res.send(things))
    .catch((error) => res.send({ error }));
});

route.post("/create", (req, res) => {
  NewAd(req.body)
    .then((things) => {
      res.send(things);
    })
    .catch((err) => res.send(err));
});

route.post("/aplly", (req, res) => {
  NewAdApplications(req.body)
    .then((things) => {
      res.send(things);
    })
    .catch((err) => res.send(err));
});

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
