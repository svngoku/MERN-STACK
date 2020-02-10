const mongoose = require("mongoose");

const user = new mongoose.Schema({
    ID: Number,
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: String,
    login: String,
    password: Number
});

mongoose.model("user", user);