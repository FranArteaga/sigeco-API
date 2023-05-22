const mongoose = require("mongoose")

const expensesSchema = new mongoose.schema ({

    expenseDate:{
        type: Date,
        default: Date.now //check
    },
    expenseAmount:{
        type: Number,
        required: true
    },
    expenseDetail:{
        type: String,
        minLength: 3,
        required:true
    }

})
module.exports = mongoose.model("expenses", expensesSchema)