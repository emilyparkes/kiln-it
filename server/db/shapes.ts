import connection from './connection'

import { Shape } from "../../models/Shape"

export function getShapes(db = connection): Promise<Shape[]> {
  return db('shapes').select()
}

export function getShapeById(id:number, db = connection): Promise<Shape> {
  return db('shapes').where('id', id).select().first()
}

export function addShape(shape:Shape, db = connection): Promise<number[]> {
  return db('shapes').insert({ shape })
}

export function updateShape(id:number, shape:Shape, db = connection): Promise<number> {
  return db('shapes').where('id', id).update({ shape })
}

export function deleteShape(id:number, db = connection): Promise<number> {
  return db('shapes').where('id', id).delete()
}
