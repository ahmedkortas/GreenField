const db = require("./dbConfig");
const mongoose = require("mongoose");

jdSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  feedbackGiverEmail: { type: String, required: true },
  feedback: { type: String, required: true },
  employeeEmail: { type: String, required: true },
});

let Jd = mongoose.model("JD", jdSchema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Jd.find({}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
