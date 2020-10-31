const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Korfi");
mongoose.set("useFindAndModify", false);

module.exports.db = mongoose.connection;
