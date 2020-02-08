const mongoose, { Schema } = require("mongoose");

userSchema = new Schema({
    ID: Number,
    firstname: String,
    lastname: String,
    login: String,
    password: Number
});

mongoose.model("user", userSchema);


