const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    description:{
        type: String,
        trim: true,
        required: false
    },
    category:{
        type: String,
        trim: true,
        required: [true,'Please add category']
    },
    amount:{
        type: Number,
        required: [true,'Please add an amount']
    },
    type:{
        type: Boolean,
        trim: true,
        required: [true,'Please add type']
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema)