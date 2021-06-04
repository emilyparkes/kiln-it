const { connection } = require('./connection')

module.exports = {
  getStatuses
}

function getStatuses (db = connection) {
  return db('statuses').select()
}
