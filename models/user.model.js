const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    ID: Number,
    firstname: String,
    lastname: String,
    login: String,
    password: Number
});

mongoose.model("users", userSchema);


