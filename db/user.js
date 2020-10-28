const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports.create = user => {
  return User.create(user);
}

module.exports.findOne = (critira = {} )=> {
  return User.findOne(critira);
}

module.exports.findByEmail = email => {
  return User.find({email});
}






// module.exports. = (obj) => {
//   return new Promise((resolve, reject) => {
//     let email = obj.email;
//     User.findOne({ email: email }, (err, data) => {
//       if (err) return reject(err);
//       if (data === null) {
//         User.create(obj, (err, data) => {
//           if (err) return reject(err);
//           resolve(data);
//         });
//       } else {
//         resolve("exists");
//       }
//     });
//   });
// };
