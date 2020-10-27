const db = require("./dbConfig");
const mongoose = require("mongoose");

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jpSchema = new Schema({
    description: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    providerEmail: {type:String, required:true, unique: true}
});

jpSchema.plugin(uniqueValidator); 

let Jp = mongoose.model('JP', jpSchema);