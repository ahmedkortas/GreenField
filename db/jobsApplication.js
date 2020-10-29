const mongoose = require("mongoose");
const db = require("./dbConfig");

jobsApplicationSchema = new mongoose.Schema({
  description: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true },
  providerEmail: { type: String, required: true },
});

let Ja = mongoose.model("JA", jobsApplicationSchema);

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Ja.find({employeeEmail:email}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
