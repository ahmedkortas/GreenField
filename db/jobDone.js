const db = require("./dbConfig");
const mongoose = require("mongoose");

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

jdSchema = new mongoose.Schema({
  description: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  providerEmail: { type: String, required: true, unique: true },
});

let Jd = mongoose.model("JD", jdSchema);

module.exports.findAll = (email) => {
  return new Promise((resolve, reject) => {
    Jd.find({employeeEmail:email}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
