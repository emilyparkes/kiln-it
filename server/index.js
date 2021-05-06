const path = require('path')
const envPath = path.join(__dirname, '..', '.env')
require('dotenv').config({ path: envPath })

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
