import connection from './connection'

import { Glaze } from "../../models/Glaze"

export default {
  getGlazes,
  addGlaze,
  updateGlaze,
  deleteGlaze,
}

function getGlazes(db = connection): Promise <Glaze[]> {
  return db('glazes').select()
}

function addGlaze(glaze: Glaze, db = connection): Promise <number> {
  return db('glazes').insert({ glaze })
}

function updateGlaze(id:number, glaze: Glaze, db = connection): Promise <number> {
  return db('glazes').where('id', id).update({ glaze })
}

function deleteGlaze(id:number, db = connection): Promise <number> {
  return db('glazes').where('id', id).delete()
}
