const express = require('express')
const app = express()
const morgan = require('morgan')


// Middlwares to run on every request
app.use(express.json())  // =>  req.body - POST PUT
app.use(morgan('dev'))


// Routes
app.use("/turtles", require('./routes/turtleRoutes.js'))




app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})