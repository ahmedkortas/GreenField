const db = require("./dbConfig");
const mongoose = require("mongoose");

jobsPendingSchema = new mongoose.Schema({
  description: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  providerEmail: { type: String, required: true },
});

let Jpending = mongoose.model("Jpending", jobsPendingSchema);

module.exports.NewAd = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
console.log(obj)
    Jpending.findOne({ description: description }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        Jpending.create(obj, (err, data) => {
          if (err) return reject(err);
          console.log(data,'db')
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Jpending.find({}, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.deletPending = (object) => {
  let description = object.description;
  return Jpending.deleteMany({ description }, (err) => {
    if (err) return reject(err);
  });
};
