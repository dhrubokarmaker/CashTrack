const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = async (req,res,next) => {
    let token
    if(req.signedCookies && req.signedCookies.token){
        try{
            token = req.signedCookies.token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }
        catch(err){
            return res.status(403).json({message: 'Not Authorized'})
        }
    }
    if(!token){
        return res.status(401).json({message: 'No token'})
    }
}

module.exports = {authenticate}