const { connection } = require('./connection')

module.exports = {
  getGlazes,
  addNewGlaze
}

function getGlazes (db = connection) {
  return db('glazes').select()
}

function addNewGlaze (glaze, db = connection) {
  return db('glazes')
    .insert({ glaze })
}
