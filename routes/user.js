const express = require('express')
const router = express.Router()
const {registerUser,authenticateUser,getUser} = require('../controllers/user')

router
    .post('/',registerUser)
    .post('/login',authenticateUser)
    .get('/user', getUser)




module.exports = router;