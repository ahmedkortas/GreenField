const db = require("./dbConfig");
const mongoose = require("mongoose");

jobsDoneSchema = new mongoose.Schema({
  description: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true },
  providerEmail: { type: String, required: true },
});

let Jd = mongoose.model("JD", jobsDoneSchema);

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Jd.find({ employeeEmail: email }, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
