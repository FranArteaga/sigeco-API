const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        minlength: 3,
        required: true,
    },
    email: {
        type: String,
        minlength: 3,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'tenant'],
    },
    apartmentDetails: {
        apartmentNumber: {
            type: Number,
        },
        apartmentLetter:{
            type: String,
        },
    }

})



module.exports = mongoose.model("users", userSchema)