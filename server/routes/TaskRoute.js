let route = require("express").Router();
let {newAd, findAll} = require("../../db/jobsPending.js");

route.get("/dummy", (req,res)=>{
  findAll().then(things => res.send(things))
      .catch(error => res.send({ error }));
  })

  route.post("/dummy", (req,res)=>{

    
  })