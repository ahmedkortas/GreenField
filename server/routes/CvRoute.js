let route = require("express").Router();
let { create } = require("../../db/cv.js");
let {findOnebyEmail} = require("../../db/user.js");


route.post('/Cv',(req,res)=>{
    var email =req.body
  findOnebyEmail(email).then(thing => res.status(200).json(thing))
  
  })
  
  
route.get("/",(req,res) =>{
    console.log("presentggyvyvyhhgfycutcfctctfcfjcctctfcfjctt")
    var email =req.body
    findOnebyEmail(email).then(thing => {res.send(thing)
    console.log(thing)})
    .catch(err => res.send(err))
})


module.exports = route;