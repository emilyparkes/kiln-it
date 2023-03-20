const { connection } = require('./connection')

export default {
  getShapes,
  addShape,
  updateShape,
  deleteShape,
}

function getShapes(db = connection) {
  return db('shapes').select()
}

function addShape(shape, db = connection) {
  return db('shapes').insert({ shape })
}

function updateShape(id, shape, db = connection) {
  return db('shapes').where('id', id).update({ shape })
}

function deleteShape(id, db = connection) {
  return db('shapes').where('id', id).delete()
}
