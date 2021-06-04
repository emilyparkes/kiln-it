const { connection } = require('./connection')

module.exports = {
  getClay,
  addNewClay
}

function getClay (db = connection) {
  return db('clay').select()
}

function addNewClay (clay, db = connection) {
  return db('clay')
    .insert({ clay })
}
