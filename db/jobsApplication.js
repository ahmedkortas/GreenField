const mongoose = require("mongoose");
const db = require("./dbConfig");

jobsApplicationSchema = new mongoose.Schema({
  description: { type: String, required: true },
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
    Ja.find({ employeeEmail, description }, (err, data) => {
      if (err) return reject(err);
      if (data.length === 0) {
        Ja.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

module.exports.findAllJaApToProg = (obj) => {
  let employeeEmail = obj.employeeEmail;
  let description = obj.description;
  return new Promise((resolve, reject) => {
    Ja.find({ description }, (err, data) => {
      if (err) return reject(err);
      for (var i = 0; i < data.length; i++) {
        if (data[i].employeeEmail === employeeEmail) {
          resolve(data[i]);
          break;
        }
      }
    });
  });
};

module.exports.findAllJaByDisc = (obj) => {
  let description = obj.description;
  return new Promise((resolve, reject) => {
    Ja.find({ description }).then((result) => {
      resolve(result);
    });
  });
};

module.exports.findAllJa = (obj) => {
  if (obj.employeeEmail !== undefined) {
    let employeeEmail = obj.employeeEmail;
    return new Promise((resolve, reject) => {
      Ja.find({ employeeEmail }, (err, data) => {
        if (err) return reject(err);
        else {
          resolve(data);
        }
      });
    });
  } else {
    let providerEmail = obj.providerEmail;
    return new Promise((resolve, reject) => {
      Ja.find({ providerEmail }, (err, data) => {
        if (err) return reject(err);
        else {
          resolve(data);
        }
      });
    });
  }
};

module.exports.deletAccepted = (object) => {
  let description = object.description;
  return Ja.deleteMany({ description }, (err) => {
    if (err) return reject(err);
  });
};
