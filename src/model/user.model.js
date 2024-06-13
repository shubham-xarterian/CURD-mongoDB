const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  password : {type: String, required:true}
});


const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;