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

let Jd = mongoose.model("jobsdone", jobsDoneSchema);

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Jd.find({ providerEmail: email }, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};

module.exports.createDone = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
    Jd.findOne({ description }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        Jd.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

module.exports.findDoneByEmail = (providerEmail) => {
  return new Promise((resolve, reject) => {
    Jd.findOne({ providerEmail }, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
