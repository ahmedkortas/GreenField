const mongoose = require("mongoose");
const db = require("./dbConfig");

const jobsPending = require("./jobsPending.js");
const jobsApplication = require("./jobsApplication.js");

jobsProgressSchema = new mongoose.Schema({
  description: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true, unique: true },
  providerEmail: { type: String, required: true, unique: true },
});

let Jp = mongoose.model("JP", jobsProgressSchema);

module.exports.CreateJobInProgress = (obj) => {
  return new Promise((resolve, reject) => {
    let employeeEmail = obj.employeeEmail;
    jobsApplication.findAll({ employeeEmail });
  });
};

// module.exports.CreateJobInProgress = (obj) => {
//   return new Promise((resolve, reject) => {
//     let email = obj.email;
//     User.findOne({ email: email }, (err, data) => {
//       if (err) return reject(err);
//       if (data === null) {
//         console.log(obj);
//         User.create(obj, (err, data) => {
//           if (err) return reject(err);
//           resolve(data);
//         });
//       } else {
//         resolve("exists");
//       }
//     });
//   });
// };

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Jp.find({ employeeEmail: email }, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
