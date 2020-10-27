const mongoose = require('mongoose');
const Schema = mongoose.Schema;

jdSchema = new Schema({
    rating: Number,
    feedbackGiverEmail: String,
    feedback: String,
    employeeEmail: String
});

module.exports = mongoose.model('JD', jdSchema);