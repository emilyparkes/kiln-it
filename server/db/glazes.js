const { connection } = require('./connection')

module.exports = {
  getGlazes,
  getGlazeById
}

function getGlazes (db = connection) {
  return db('glazes')
}

function getGlazeById (id, db = connection) {
  return db('glazes').where('id', id).select().first()
}
