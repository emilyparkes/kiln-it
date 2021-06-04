const { connection } = require('./connection')

module.exports = {
  getShapes,
  addNewShape
}

function getShapes (db = connection) {
  return db('shapes').select()
}

function addNewShape (shape, db = connection) {
  return db('shapes')
    .insert({ shape })
}
