import connection from './connection'

export default {
  getClay,
  getClayById,
  addClay,
  updateClay,
  deleteClay,
}

function getClay(db = connection): Promise<any>{
  return db('clay').select()
}

function getClayById(id:number, db = connection): Promise<any> {
  return db('clay').where('id', id).select().first()
}

function addClay(clay:any, db = connection): Promise<any> {
  return db('clay').insert({ clay })
}

function updateClay(id:number, clay:any, db = connection): Promise<any> {
  return db('clay').where('id', id).update(clay)
}

function deleteClay(id:number, db = connection): Promise<any> {
  return db('clay').where('id', id).delete()
}
