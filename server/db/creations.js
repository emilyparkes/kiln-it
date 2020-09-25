const pg = require('pg')

const cs = 'postgres://postgres:s$cret@localhost:5432/ydb'

const client = new pg.Client(cs)

client.connect()

module.exports = {
  getCreations
}

function getCreations () {
  client.query('SELECT * FROM creations')
    .then(res => {
      const data = res.rows

      console.log('all data')
      return data
    })
    .finally(() => {
      client.end()
    })
    .catch(err => {
      console.log(err.message)
    })
}
