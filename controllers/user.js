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
        return res.status(201).json({_id: user._id, token : generateToken(user._id)})
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}

const authenticateUser = async (req,res) => {
    const {username, password} = req.body
    const user = User.findOne({username})
}

const getUser = async (req,res) => {
    try{

    }
    catch{
        res.status(500).json({message: err})
    }
}

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '10d'
    })
}

module.exports = {
    registerUser,
    authenticateUser,
    getUser
}