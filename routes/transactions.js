const express = require('express')
const router = express.Router()
const {getTransaction,addTransaction,deleteTransaction, deleteAll} = require('../controllers/transactions')
const {authorize} = require('../middleware/authMiddleware')

router
    .get('/',authorize,getTransaction)
    .post('/',authorize,addTransaction)

router
    .delete('/:id',authorize,deleteTransaction)
    .delete('/',authorize,deleteAll)


module.exports = router;