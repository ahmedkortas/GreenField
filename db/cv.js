const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cvpSchema = new Schema({
    name: String,
    description: String,
    email: String,
    age: Number,
    address: Number,
    phone: Number,
    gender: String,
    languages: String,
    diploma: String,
    experience: String
});

module.exports = mongoose.model('CV', cvpSchema);

