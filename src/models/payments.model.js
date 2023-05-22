const mongoose = require("mongoose")

const paymentsSchema = new mongoose.schema({
    paymentDate:{
        type: Date,
        default: Date.now //check
    },
    paymentAmount:{
        type: Number,
        required: true
    },
    paymentDetail:{
        type: String,
        minLength: 3,
        required:true
    }

})