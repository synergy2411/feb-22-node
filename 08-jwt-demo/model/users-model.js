const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username : String,
    password : String,
    salary : Number,
    isAdmin : Boolean
})

const UserModel = model("User", userSchema);

module.exports = UserModel