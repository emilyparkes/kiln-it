const { connection } = require('./connection')

module.exports = {
  getShapes,
  getShapeById
}

function getShapes (db = connection) {
  return db('shapes')
}

function getShapeById (id, db = connection) {
  return db('shapes').where('id', id).select().first()
}
