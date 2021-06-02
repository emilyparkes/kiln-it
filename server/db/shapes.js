const { connection } = require('./connection')

module.exports = {
  getShapes,
  addNewShape
}

function getShapes (db = connection) {
  return db('shapes')
}

function addNewShape (shape, db = connection) {
  return db('shapes')
    .insert({ shape })
}
