const mongoose = require('mongoose');
const Schema = mongoose.Schema;

jaSchema = new Schema({
    description: String,
    contact: String,
    address: String,
    price: Number,
    employeeEmail: String,
    providerEmail: String,
})

module.exports = mongoose.model('JA', jaSchema);