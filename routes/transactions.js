const express = require('express')
const { get } = require('http')
const router = express.Router()
const {getTransaction,addTransaction,deleteTransaction} = require('../controllers/transactions')

router
    .get('/',getTransaction)
    .post('/',addTransaction)

router
    .delete('/:id',deleteTransaction)


module.exports = router;