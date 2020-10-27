const db = require("./dbConfig");

console.log(db);

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
});

let User = mongoose.model("User", userSchema);

module.exports.create = (obj) => {
  return new Promise((resolve, reject) => {
    let email = obj.email;
    User.findOne({ email: email }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        User.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};
