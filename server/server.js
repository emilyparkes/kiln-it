const path = require('path')
const express = require('express')

const somethingRoutes = require('./routes/something')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/something', somethingRoutes)

module.exports = server
