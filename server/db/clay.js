const connection = require('./connection')

module.exports = {
  getClay,
  getClayById
}

function getClay (db = connection) {
  return db('clay')
}

function getClayById (id, db = connection) {
  return db('clay').where('id', id).select().first()
}
