const db = require("./dbConfig");
const mongoose = require("mongoose");

jpSchema = new Schema({
    description: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    providerEmail: {type:String, required:true, unique: true}
});

let Jp = mongoose.model("Jp", jpSchema);

module.exports.NewAd = (obj) => {
  return new Promise((resolve, reject) => {
    let description = obj.description;
    Jp.findOne({ description: description }, (err, jp) => {
      if (err) return reject(err);
      if (jp === null) {
        resolve(null);
      } else {
        resolve(jp);
      }
    });
  });
};

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Jp.find({}, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
