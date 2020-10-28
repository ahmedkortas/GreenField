const mongoose = require("mongoose");
const db = mongoose.connection;

jobsProgressSchema = new mongoose.Schema({
  description: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true },
  providerEmail: { type: String, required: true },
});

let Jp = mongoose.model("JP", jobsProgressSchema);

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Jp.find({employeeEmail:email}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
