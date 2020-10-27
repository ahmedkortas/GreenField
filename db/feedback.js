const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

fbSchema = new Schema({
    description: String,
    employeeEmail: String
});

module.exports = mongoose.model('FB', fbSchema);
