const mongoose = require("mongoose");


const curdSchema = new mongoose.Schema({
    plantName: {type: String, required: true},
    type: {type: String, required: true},
    scientificName: {type: String, required: true},
    color: {type: String, required: true}
})

const CURDOprations = mongoose.model("CURDOprations", curdSchema);

module.exports = CURDOprations;