const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

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