const mongoose = require("mongoose");
const db = require("./dbConfig");

jpSchema = new Schema({
  description: String,
  contact: String,
  address: String,
  price: Number,
  providerEmail: { type: String, required: true, unique: true },
});

module.exports.NewAd = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
    User.findOne({ description: description }, (err, user) => {
      if (err) return reject(err);
      if (user === null) {
        resolve(null);
      } else {
        resolve(user);
      }
    });
  });
};
