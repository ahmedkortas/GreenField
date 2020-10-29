let route = require("express").Router();
let { NewAd, findAll } = require("../../db/jobsPending.js");

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

route.get("/basou", (req, res) => {
  res.send("hey");
});

module.exports = route;
