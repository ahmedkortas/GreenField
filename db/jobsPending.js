const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

jpSchema = new Schema({
    description: String,
    contact: String,
    address: String,
    price: Number,
    providerEmail: {type:String, required:true, unique: true}
});

jpSchema.plugin(uniqueValidator);

module.exports = mongoose.model('JP', jpSchema);