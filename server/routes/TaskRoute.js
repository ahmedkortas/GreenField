let route = require("express").Router();
let { NewAd, deletPending, findAll } = require("../../db/jobsPending.js");
let { findOnebyEmail } = require("../../db/user.js");
let {
  NewAdApplications,
  findAllJa,
  deletAccepted,
  findAllJaApToProg,
  findAllJaByDisc,
} = require("../../db/jobsApplication.js");
let {
  CreateJobInProgress,
  findAllJobinProg,
  findToDone,
  deletProg,
} = require("../../db/jobsProgress.js");

let { createDone, findDoneByEmail } = require("../../db/jobDone.js");

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
      NewAd(obj)
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
      res.send(things);
    })
    .catch((err) => res.send(err));
});

route.post("/applicant", (req, res) => {
  findAllJaByDisc(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send(err));
});

//find pending for provider

route.post("/jobApplication/giver", (req, res) => {
  findAllJa(req.body)
    .then((data) => {
      res.send(data);
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
  findAllJobinProg(req.body).then((data) => {
    res.send(data);
  });
});

//creat job in prog and change other fields
route.post("/Progress", (req, res) => {
  let employeeEmail = req.body.employeeEmail;
  let description = req.body.description;
  findAllJaApToProg({ employeeEmail, description })
    .then((employees) => {
      CreateJobInProgress(employees)
        .then((jobInProgress) => {
          deletAccepted(jobInProgress);
          deletPending(jobInProgress);
          res.send(jobInProgress);
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send("does"));
});

//make post status done
route.post("/done", (req, res) => {
  let description = req.body.description;
  findToDone(description).then((done) => {
    if (done !== null) {
      let NewProgress = {};
      NewProgress.employeeEmail = done.employeeEmail;
      NewProgress.providerEmail = done.providerEmail;
      NewProgress.price = done.price;
      NewProgress.description = done.description;
      NewProgress.contact = done.contact;
      NewProgress.address = done.address;
      createDone(NewProgress).then((data) => {
        deletProg(data.description).then((done) => {
          res.send("ok");
        });
      });
    }
  });
});

route.post("/ratingProcess", (req, res) => {
  console.log("hey", req.body.providerEmail);
  findDoneByEmail(req.body.providerEmail).then((description) => {
    console.log(description);
    res.send(description);
  });
});

module.exports = route;
