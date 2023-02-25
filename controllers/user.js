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
        res.cookie("token",generateToken(user._id),{path:"https://cashtrackapp.netlify.app/",httpOnly : true,signed:true,sameSite: "none",secure:true})
        return res.status(201).json({_id: user._id, token : generateToken(user._id)})
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}

const authenticateUser = async (req,res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(user){
            if(password && await bcrypt.compare(password,user.password)){
                res.cookie("token",generateToken(user._id),{path:"https://cashtrackapp.netlify.app/",httpOnly : true, signed:true,sameSite: "none",secure:true})
                return res.status(200).json({_id: user._id, token : generateToken(user._id)})
            }
            else{
                return res.status(400).json({message: 'Incorrect password'})
            }
        }
        else{
            return res.status(400).json({message: 'Cannot find user'})
        }
    }
    catch(err){
        return res.status(500).json({message: err.stack})
    }
}

const getUser = async (req,res) => {
    res.status(200).json()
}

const logout = async (req,res) => {
    res.clearCookie("token")
    res.status(200).json()
}

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


module.exports = {
    logout,
    registerUser,
    authenticateUser,
    getUser
}