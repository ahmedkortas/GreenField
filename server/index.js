const express = require("express");
let PORT = 3000;
// let user = require("../db/user.js")
const bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/user", (req, res) => {
//   let obj = req.body;
//   user(obj).then((user) => {
//     res.send(str);
//   });
// });


app.listen(PORT, () => {
  console.log("server is connected");
});
