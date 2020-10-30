const mongoose = require("mongoose");
const db = require("./dbConfig");

jobsApplicationSchema = new mongoose.Schema({
  description: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true },
  providerEmail: { type: String },
});

let Ja = mongoose.model("JApplication", jobsApplicationSchema);

module.exports.NewAdApplications = (obj) => {
  return new Promise((resolve, reject) => {
    let employeeEmail = obj.employeeEmail;
    let description = obj.description;
    console.log(obj);
    Ja.find({ employeeEmail, description }, (err, data) => {
      if (err) return reject(err);
      console.log(data);
      if (data.length === 0) {
        Ja.create(obj, (err, data) => {
          console.log("createeeed", data);
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

module.exports.findAllJa = (employeeEmail) => {
  return new Promise((resolve, reject) => {
    Ja.find({ employeeEmail }, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};

module.exports.deletAccepted = (object) => {
  let description = object.description;
  return Ja.deleteMany({ description }, (err) => {
    if (err) return reject(err);
  });
};
