const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,'Please add username'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'Please add password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User',UserSchema)