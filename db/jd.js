const db = require('./dbConfig');
const mongoose = require('./dbConfig');
const Schema = require('./dbConfig');

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jdSchema = new Schema({
    rating: Number,
    feedbackGiverEmail: String,
    feedback: String,
    employeeEmail: String
});

module.exports = mongoose.model('JD', jdSchema);