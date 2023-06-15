import connection from './connection'

import { Glaze } from "../../models/Glaze"

export function getGlazes(db = connection): Promise <Glaze[]> {
  return db('glazes').select()
}

export function addGlaze(glaze: Glaze, db = connection): Promise <number> {
  return db('glazes').insert({ glaze })
}

export function updateGlaze(id:number, glaze: Glaze, db = connection): Promise <number> {
  return db('glazes').where('id', id).update({ glaze })
}

export function deleteGlaze(id:number, db = connection): Promise <number> {
  return db('glazes').where('id', id).delete()
}
