require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',() => {
    res.send('hiteshdotcom')
})
/* ******************************************* */
//gave problem -> therfore we have to restart the server
app.get('/login',(req,res) => {
    res.send('<h1>please login </h1>')
})

// listen -> variable which is inside port
app.listen(process.env.port, (req , res) => {
  console.log(`Example app listening on port ${port}`)
})