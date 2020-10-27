const db = require('./dbConfig');
const mongoose = require("mongoose");

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jdSchema = new Schema({
    rating: { type: Number, required: true },
    feedbackGiverEmail: { type: String, required: true },
    feedback: { type: String, required: true },
    employeeEmail: { type: String, required: true }
});

let Jd = mongoose.model('JD', jdSchema);

module.exports.create = () => {
  return new Promise((resolve, reject) => {
  Jd.find({}, function(err, data) {
    if (err) return reject(err);
    else {
      resolve(data);
    }
  });
});
}