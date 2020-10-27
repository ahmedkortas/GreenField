const mongoose = require("mongoose");
const db = mongoose.connection;

// jaSchema = new mongoose.Schema({
//   description: String,
//   contact: String,
//   address: String,
//   price: Number,
//   employeeEmail: String,
//   providerEmail: String,
// });

jaSchema = new mongoose.Schema({
  description: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  employeeEmail: { type: String, required: true },
  providerEmail: { type: String, required: true },
});

let Ja = mongoose.model("JA", jaSchema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Ja.find({}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
