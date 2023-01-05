const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


const registerUser = async (req,res) => {
    try{
        const {username,password} = req.body
        if(!username || !password){
            return res.status(400).json({message: 'Insufficient credentials'})
        }
        
        const userExists = await User.findOne({username})
        if(userExists){
            return res.status(400).json({message: 'User already exists'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const user = await User.create({username,password: hashedPassword})
        if(!user){
            return res.status(400).json({message: 'User couldnt be created'})
        }
        return res.status(201).json({_id: user._id})
    }
    catch(err){
        res.status(500).json({message: err})
    }
}

const authenticateUser = async (req,res) => {
    res.json({message: "Authenticated"})
}

const getUser = async (req,res) => {
    res.json({message: "User retrieved"})
}

module.exports = {
    registerUser,
    authenticateUser,
    getUser
}