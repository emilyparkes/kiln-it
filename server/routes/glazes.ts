import express from 'express'

import * as db from '../db/glazes'
import { Glaze } from '../../models/Glaze'
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getGlazes()
    .then((glazes: Glaze[]) => res.json(glazes))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

// TODO: Think this route should change to being when a new glaze option is created
router.post('/', (req, res) => {
  const addedGlazes = req.body.map((glazeObj:Glaze) => {
    return db.addGlaze(glazeObj).then((idArr) => {
      const id = idArr[0]
      return { id: id, glaze: glazeObj.glaze }
    })
  })
  Promise.all(addedGlazes)
    .then((glazes) => {
      return res.json(glazes)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  return db.updateGlaze(Number(req.params.id), req.body)
    .then(() => db.getGlazeById(Number(req.params.id)))
    .then((glaze) => {
      return res.json(glaze)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  return db.deleteGlaze(Number(req.params.id))
    .then((deleted) =>
      res.json({ deleted: `${deleted} item(s) have been deleted successfully` })
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
