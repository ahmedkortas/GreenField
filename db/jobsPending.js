const mongoose = require("mongoose");
const db = require("./dbConfig");

jpSchema = new Schema({
  description: String,
  contact: String,
  address: String,
  price: Number,
  providerEmail: { type: String, required: true, unique: true },
});

let Jp = mongoose.model("Jp", jpSchema);

module.exports.NewAd = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
    Jp.findOne({ description: description }, (err, jp) => {
      if (err) return reject(err);
      if (jp === null) {
        resolve(null);
      } else {
        resolve(jp);
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
