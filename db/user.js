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

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true},
    phoneNumber: {type:Number, required:true},
    address : {type:String, required:true},
    
    
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

var selectAll = function(callback) {
    User.find({}, function(err, users) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, users);
      }
    });
  };
  
  var addUser= function (user) {
    User.create(user);
  }
  
  const saveUser = (data) => {
    return new Promise((resolve,reject) => {
        var newUser = new User({username:data.username,password:data.password,feedback:""});
        newUser.save((err,res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res)
            }
        })
    }) 
  };
