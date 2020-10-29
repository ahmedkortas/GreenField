const db = require("./dbConfig");
const mongoose = require("mongoose");

<<<<<<< HEAD
fbSchema = new mongoose.Schema({
=======
feedbackbSchema = new mongoose.Schema({
>>>>>>> 0d743f2ac97a9c707d310e0d80b839e120cd5a52
  description: { type: String, required: true },
  employeeEmail: { type: String, required: true },
});

let Fb = mongoose.model("Feedback", feedbackbSchema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Fb.find({}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
