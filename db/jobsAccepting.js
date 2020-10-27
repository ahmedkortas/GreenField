const mongoose = require("mongoose");
const db = mongoose.connection;

jaSchema = new mongoose.Schema({
  description: String,
  contact: String,
  address: String,
  price: Number,
  employeeEmail: String,
  providerEmail: String,
});

module.exports = mongoose.model("JA", jaSchema);
