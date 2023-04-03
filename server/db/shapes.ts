import connection from './connection'

import { Shape } from "../../models/Shape"

export default {
  getShapes,
  addShape,
  updateShape,
  deleteShape,
}

function getShapes(db = connection): Promise<Shape[]> {
  return db('shapes').select()
}

function addShape(shape:Shape, db = connection): Promise<number> {
  return db('shapes').insert({ shape })
}

function updateShape(id:number, shape:Shape, db = connection): Promise<number> {
  return db('shapes').where('id', id).update({ shape })
}

function deleteShape(id:number, db = connection): Promise<number> {
  return db('shapes').where('id', id).delete()
}
