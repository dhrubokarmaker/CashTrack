const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.set('trust proxy', 1)

dotenv.config({path: "./config/config.env"})
app.use(cookieParser(process.env.COOKIE_PARSER))

connectDB()

const transactions = require('./routes/transactions')
const users = require('./routes/user')

app.use('/api/v1/users', users);
app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})