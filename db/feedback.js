const db = require('./dbConfig');
const mongoose = require("mongoose");

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

fbSchema = new Schema({
    description: { type: String, required: true },
    employeeEmail: { type: String, required: true },
});

let Fb = mongoose.model('FB', fbSchema);
