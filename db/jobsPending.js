const db = require("./dbConfig");
const mongoose = require("mongoose");

jpSchema = new mongoose.Schema({
  description: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  providerEmail: { type: String, required: true, unique: true },
});

let Jp = mongoose.model("Jp", jpSchema);

module.exports = Jp;

module.exports.NewAd = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
    Jp.findOne({ description: description }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        Jp.create(obj, (err, data) => {
          if (err) return reject(err);
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
    Jp.find({}, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
