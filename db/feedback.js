const mongoose = require('mongoose');
const Schema = mongoose.Schema;

fbSchema = new Schema({
    description: String,
    employeeEmail: String
});

module.exports = mongoose.model('FB', fbSchema);
