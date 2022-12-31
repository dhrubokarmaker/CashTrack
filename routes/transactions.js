const express = require('express')
const { get } = require('http')
const router = express.Router()
const {getTransaction,addTransaction,deleteTransaction, deleteAll} = require('../controllers/transactions')

router
    .get('/',getTransaction)
    .post('/',addTransaction)

router
    .delete('/:id',deleteTransaction)
    .delete('/',deleteAll)


module.exports = router;