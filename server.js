const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({path: "./config/config.env"})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})