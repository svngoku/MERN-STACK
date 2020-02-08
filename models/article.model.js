const mongoose, { Schema } = require("mongoose");

const articleSchema = new Schema({
    ID: Number,
    title: String,
    resume: String
});

mongoose.model('article', articleSchema);
