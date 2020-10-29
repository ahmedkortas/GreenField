let route = require("express").Router();
let {NewAd, findAll} = require("../../db/jobsPending.js");
let { findOnebyEmail } = require("../../db/user.js");


route.get("/find", (req,res)=>{
  findAll().then(things => res.send(things))
      .catch(error => res.send({ error }));
  })

  route.post("/create", (req,res)=>{   
    
NewAd().then(things =>{
res.send(things)
})
.catch(err => res.send(err))
  })

  module.exports = route