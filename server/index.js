const express = require("express");
let PORT = 3000;
const bodyParser = require("body-parser");
let app = express();
const user = require("./routes/userRout.js");
const cv = require("./routes/CvRoute.js")
const {findAll} = require("../db/jobsPending.js")

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user);
app.use("/Cv", cv);


app.get("/dummy", (req,res)=>{
  console.log("here")
findAll().then(things => res.send(things))
    .catch(error => res.send({ error }));

})



app.listen(PORT, () => {
  console.log("server is connected and listning ya derwish ");
});



