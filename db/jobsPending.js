const mongoose = require('mongoose');
const Schema = mongoose.Schema;

jpSchema = new Schema({
    description: String,
    contact: String,
    address: String,
    price: Number,
    providerEmail: {type:String, required:true, unique: true}
});

module.exports = mongoose.model('JP', jpSchema);