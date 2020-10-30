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

let JobInProgress = mongoose.model("JobInProgress", jobsProgressSchema);

module.exports.CreateJobInProgress = (obj) => {
  return new Promise((resolve, reject) => {
    let NewProgress = {};
    let employeeEmail = obj.employeeEmail;

    /**
     * so i added this new progress object to filter out the extra
     * stuff that exists in the object itself
     */
    NewProgress.employeeEmail = obj.employeeEmail;
    NewProgress.providerEmail = obj.providerEmail;
    NewProgress.price = obj.price;
    NewProgress.description = obj.description;
    NewProgress.contact = obj.contact;
    NewProgress.address = obj.address;
    let des=NewProgress.description
    /**
     * trying to find one to make extrat layer of protection
     */
    JobInProgress.find({ employeeEmail,des }, (err, data) => {
      if (err) return reject(err);
      if (data.length === 0) {
        //if no data found create a new one
        JobInProgress.create(NewProgress, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      } else {
        resolve("exists");
      }
    });
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

module.exports.findAllJobinProg = (email) => {
  return new Promise((resolve, reject) => {
    Jp.find({ employeeEmail: email }, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
