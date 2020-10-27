const db = require('./dbConfig');
const mongoose = require('./dbConfig');
const Schema = require('./dbConfig');

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

const cvpSchema = new Schema({
    name: String,
    description: String,
    email: String,
    age: Number,
    address: Number,
    phone: Number,
    gender: String,
    languages: String,
    diploma: String,
    experience: String
});

module.exports = mongoose.model('CV', cvpSchema);

