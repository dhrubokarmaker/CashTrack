const express = require('express')
const router = express.Router()
const {registerUser,authenticateUser,getUser} = require('../controllers/user');
const {authorize} = require('../middleware/authMiddleware')

router
    .post('/',registerUser)
    .post('/login',authenticateUser)
    .get('/user', authorize, getUser)




module.exports = router;