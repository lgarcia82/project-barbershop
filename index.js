const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(bodyParser.json())



// Server
const PORT = process.env.PORT || 5000
app.listen(PORT)
