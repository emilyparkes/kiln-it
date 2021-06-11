const { connection } = require('./connection')

module.exports = {
  getStatuses,
  addStatus,
  updateStatus,
  deleteStatus
}

function getStatuses (db = connection) {
  return db('statuses').select()
}

function addStatus (status, db = connection) {
  return db('statuses')
    .insert({ status })
}

function updateStatus (id, status, db = connection) {
  return db('statuses')
    .where('id', id)
    .update({ status })
}

function deleteStatus (id, db = connection) {
  return db('statuses')
    .where('id', id)
    .delete()
}
