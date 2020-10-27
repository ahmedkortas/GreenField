const db = require('./dbConfig');
const mongoose = require("mongoose");

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

const cvpSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    gender: { type: String, required: true },
    languages: { type: String, required: true },
    diploma: { type: String, required: true },
    experience: { type: String, required: true }
});

let Cv = mongoose.model('CV', cvpSchema);

