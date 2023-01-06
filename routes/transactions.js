const express = require('express')
const router = express.Router()
const {getTransaction,addTransaction,deleteTransaction, deleteAll} = require('../controllers/transactions')
const {authenticate} = require('../middleware/authMiddleware')

router
    .get('/',authenticate,getTransaction)
    .post('/',authenticate,addTransaction)

router
    .delete('/:id',authenticate,deleteTransaction)
    .delete('/',authenticate,deleteAll)


module.exports = router;