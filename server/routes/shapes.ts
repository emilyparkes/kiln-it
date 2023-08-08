import express from 'express'

import * as db from '../db/shapes'
import { Shape } from '../../models/Shape'
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getShapes()
    .then((shapes) => res.json(shapes))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

//TODO: make this for adding new shapes options: just one at a time
router.post('/', (req, res) => {
  const addedShapes = req.body.map((shapeObj:Shape) => {
    return db.addShape(shapeObj).then((idArr) => {
      const id = idArr[0]
      return { id: id, shape: shapeObj.shape, inUse: true }
    })
  })
  Promise.all(addedShapes)
    .then((shapes) => res.json(shapes))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  return db
    .updateShape(Number(req.params.id), req.body)
    .then(() => db. getShapeById(Number(req.params.id)))
    .then((shape) => res.json(shape))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  return db
    .deleteShape(Number(req.params.id))
    .then((deleted) =>
      res.json({ deleted: `${deleted} item(s) have been deleted successfully` })
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
