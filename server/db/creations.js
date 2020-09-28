const { connection } = require('./connection')

module.exports = {
  getCreations,
  getCreationById
}

function getCreations (db = connection) {
  return db('creations')
}

function getCreationById (id, db = connection) {
  return db('creations')
    .where('id', id)
    .select().first()
}
