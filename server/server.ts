import express from 'express'
import { join } from 'node:path'

import allItemsRoutes from './routes/all'
import creationRoutes from './routes/creations'
import statusRoutes from './routes/statuses'
import shapesRoutes from './routes/shapes'
import clayRoutes from './routes/clay'
import glazesRoutes from './routes/glazes'

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/all', allItemsRoutes)
server.use('/api/v1/creations', creationRoutes)
server.use('/api/v1/statuses', statusRoutes)
server.use('/api/v1/shapes', shapesRoutes)
server.use('/api/v1/clay', clayRoutes)
server.use('/api/v1/glazes', glazesRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
})

export default server
