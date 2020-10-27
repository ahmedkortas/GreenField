const express = require("express");
let PORT = 3000;

const bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/api/SignUp", function (req, res) {
  let obj = req.body;
  SignUp.create(obj).then((data) => {
    str = JSON.stringify(data);
    res.send(data);
  });
});


app.listen(PORT, () => {
  console.log("server is connected");
});
