import connection from './connection'

import { Clay, DBClay } from '../../models/Clay'

export function getClay(db = connection): Promise<Clay[]>{
  return db('clay').select()
}

export function getClayById(id:number, db = connection): Promise<Clay> {
  return db('clay').where('id', id).select().first()
}

export function addClay(clay:Clay, db = connection): Promise<number> {
  return db('clay').insert({ clay })
}

export function updateClay(id:number, clay:Partial<DBClay>, db = connection): Promise<number> {
  return db('clay').where('id', id).update(clay)
}

export function deleteClay(id:number, db = connection): Promise<number> {
  return db('clay').where('id', id).delete()
}
