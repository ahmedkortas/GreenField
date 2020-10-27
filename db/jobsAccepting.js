const db = require('./dbConfig');
const mongoose = require("mongoose");

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jaSchema = new Schema({
    description: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    employeeEmail: { type: String, required: true },
    providerEmail: { type: String, required: true },
})

let Ja = mongoose.model('JA', jaSchema);

module.exports.create = () => {
  return new Promise((resolve, reject) => {
  Ja.find({}, function(err, data) {
    if (err) return reject(err);
    else {
      resolve(data);
    }
  });
});
}