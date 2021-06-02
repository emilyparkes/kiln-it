const path = require('path')
const express = require('express')

const allItemsRoutes = require('./routes/all')
const creationRoutes = require('./routes/creations')
const statusRoutes = require('./routes/statuses')
const shapesRoutes = require('./routes/shapes')
const clayRoutes = require('./routes/clay')
const glazesRoutes = require('./routes/glazes')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/all', allItemsRoutes)
server.use('/api/v1/creations', creationRoutes)
server.use('/api/v1/statuses', statusRoutes)
server.use('/api/v1/shapes', shapesRoutes)
server.use('/api/v1/clay', clayRoutes)
server.use('/api/v1/glazes', glazesRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = server
