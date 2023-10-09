import server from './server'
import envConfig from 'dotenv'

const port = process.env.PORT || 3000

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const env = envConfig.config()
  if (env.error) throw env.error
}

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
