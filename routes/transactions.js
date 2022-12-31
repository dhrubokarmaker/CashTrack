const express = require('express')
const { get } = require('http')
const router = express.Router()
const {getTransaction,addTransaction,deleteTransaction} = require('../controllers/transactions')

router.
    route('/')
    .get(getTransaction)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransaction)


module.exports = router;