const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/korfi';
const db = mongoose.connect(mongoUri);
module.exports = db;


