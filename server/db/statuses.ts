import connection from './connection'

import { Status } from "../../models/Status"

export default {
  getStatuses,
  addStatus,
  updateStatus,
  deleteStatus,
}

function getStatuses(db = connection): Promise<Status[]> {
  return db('statuses').select()
}

function addStatus(status:Status, db = connection): Promise<number> {
  return db('statuses').insert({ status })
}

function updateStatus(id:number, status:Status, db = connection): Promise<number> {
  return db('statuses').where('id', id).update({ status })
}

function deleteStatus(id:number, db = connection): Promise<number> {
  return db('statuses').where('id', id).delete()
}
