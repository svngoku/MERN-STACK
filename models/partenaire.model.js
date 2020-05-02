const mongoose = require("mongoose");

const partenaireSchema = new mongoose.Schema({
    ID: Number,
    nom: String,
    email: String ,
    adresse: String,
    ville: String,
    code_postale: String,
    pays: String,
    plage_horaire: String,
    telephone: String,
    portail: String,
    documentation: String,
    informations: String
});

mongoose.model('partenaire', partenaireSchema);