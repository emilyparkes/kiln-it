import connection from './connection'

import { Clay, DBClay } from '../../models/Clay'

export default {
  getClay,
  getClayById,
  addClay,
  updateClay,
  deleteClay,
}

function getClay(db = connection): Promise<Clay[]>{
  return db('clay').select()
}

function getClayById(id:number, db = connection): Promise<Clay> {
  return db('clay').where('id', id).select().first()
}

function addClay(clay:Clay, db = connection): Promise<number> {
  return db('clay').insert({ clay })
}

function updateClay(id:number, clay:Partial<DBClay>, db = connection): Promise<number> {
  return db('clay').where('id', id).update(clay)
}

function deleteClay(id:number, db = connection): Promise<number> {
  return db('clay').where('id', id).delete()
}
