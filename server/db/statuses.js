const { connection } = require('./connection')

module.exports = {
  getStatuses,
  addNewStatus
}

function getStatuses (db = connection) {
  return db('statuses').select()
}

function addNewStatus (status, db = connection) {
  return db('statuses')
    .insert({ status })
}
