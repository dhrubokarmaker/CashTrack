const express = require('express')
const router = express.Router()
const {registerUser,authenticateUser,getUser} = require('../controllers/user');
const {authenticate} = require('../middleware/authMiddleware')

router
    .post('/',registerUser)
    .post('/login',authenticateUser)
    .get('/user', authenticate, getUser)




module.exports = router;