const db = require('./dbConfig');
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('./dbConfig');
const Schema = require('./dbConfig');

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jpSchema = new Schema({
    description: String,
    contact: String,
    address: String,
    price: Number,
    providerEmail: {type:String, required:true, unique: true}
});

jpSchema.plugin(uniqueValidator); 

module.exports = mongoose.model('JP', jpSchema);