const { connection } = require('./connection')

module.exports = {
  getClay,
  getClayById,
  addClay,
  updateClay,
  deleteClay
}

function getClay (db = connection) {
  return db('clay')
    .select()
}

function getClayById (id, db = connection) {
  return db('clay')
    .where('id', id)
    .select()
}

function addClay (clay, db = connection) {
  return db('clay')
    .insert({ clay })
}

function updateClay (id, clay, db = connection) {
  return db('clay')
    .where('id', id)
    .update({ clay })
}

function deleteClay (id, db = connection) {
  return db('clay')
    .where('id', id)
    .delete()
}
