const express = require('express')
const app = express()
const morgan = require('morgan')


// Middlwares to run on every request
app.use(express.json())  // =>  req.body - POST PUT
app.use(morgan('dev'))


// app.use((req, res, next) => {
//     console.log("I ran first")
//     next()
// })

// app.use((req, res, next) => {
//     console.log("I ran second")
//     next()
// })

// Routes
app.use("/turtles", require('./routes/turtleRoutes.js.js.js.js'))



app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})