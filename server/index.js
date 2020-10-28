const express = require("express");
let PORT = 3000;
const bodyParser = require("body-parser");
let app = express();
const user = require("./routes/userRout.js");
const cv = require("./routes/CvRoute.js")
const Task = require('./routes/TaskRoute.js')


app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user);
app.use("/Cv", cv);
app.use("/Task", Task)





app.listen(PORT, () => {
  console.log("server is connected and listning ya derwish ");
});



