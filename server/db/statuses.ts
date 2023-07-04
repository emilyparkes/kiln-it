import connection from './connection'

import { Status } from "../../models/Status"

export function getStatuses(db = connection): Promise<Status[]> {
  return db('statuses').select()
}

export function getStatusById(id:number, db = connection): Promise<Status> {
  return db('statuses').where('id', id).select().first()
}

export function addStatus(status:Status, db = connection): Promise<number[]> {
  return db('statuses').insert({ status })
}

export function updateStatus(id:number, status:Status, db = connection): Promise<number> {
  return db('statuses').where('id', id).update({ status })
}

export function deleteStatus(id:number, db = connection): Promise<number> {
  return db('statuses').where('id', id).delete()
}
