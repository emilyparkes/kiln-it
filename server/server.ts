import express from 'express'

import allItemsRoutes from './routes/all'
import creationRoutes from './routes/creations'
import statusRoutes from './routes/statuses'
import shapesRoutes from './routes/shapes'
import clayRoutes from './routes/clay'
import glazesRoutes from './routes/glazes'

const server = express()

server.use(express.json())

server.use('/api/v1/all', allItemsRoutes)
server.use('/api/v1/creations', creationRoutes)
server.use('/api/v1/statuses', statusRoutes)
server.use('/api/v1/shapes', shapesRoutes)
server.use('/api/v1/clay', clayRoutes)
server.use('/api/v1/glazes', glazesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static('/app/dist/assets'))
  server.get('*', (req, res) => {
    res.sendFile('/app/dist/index.html')
  })
}

export default server
