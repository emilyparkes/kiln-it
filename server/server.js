const path = require('path')
const express = require('express')

const statusRoutes = require('./routes/statuses')
const creationRoutes = require('./routes/creations')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/statuses', statusRoutes)
server.use('/api/v1/creations', creationRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = server
