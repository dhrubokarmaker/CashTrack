const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express()
app.use(express.json())
dotenv.config({path: "./config/config.env"})

connectDB()

const transactions = require('./routes/transactions')

app.use('/api/v1/transactions', transactions);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})