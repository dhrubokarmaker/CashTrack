const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({path: "./config/config.env"})

const transactions = require('./routes/transactions')

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})