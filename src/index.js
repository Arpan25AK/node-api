require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())
app.use(userRoutes)

app.listen(process.env.PORT ,() =>{
  console.log(`server is running at port : ${process.env.PORT}`)
})

