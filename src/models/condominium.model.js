const mongoose = require("mongoose")

const condominiumSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true,
    },
    street: {
        type: String,
        minLength: 3,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String
    }



})

module.exports = mongoose.model("condominium", condominiumSchema)