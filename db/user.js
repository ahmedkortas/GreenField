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

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema); 
