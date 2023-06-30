const { connection } = require('./connection')

export default {
  getGlazes,
  addGlaze,
  updateGlaze,
  deleteGlaze,
}

function getGlazes(db = connection) {
  return db('glazes').select()
}

function addGlaze(glaze, db = connection) {
  return db('glazes').insert({ glaze })
}

function updateGlaze(id, glaze, db = connection) {
  return db('glazes').where('id', id).update({ glaze })
}

function deleteGlaze(id, db = connection) {
  return db('glazes').where('id', id).delete()
}
