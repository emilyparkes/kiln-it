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

router.post('/', (req, res) => {
  const addedGlazes = req.body.map((glaze:Glaze) => {
    return db.addGlaze(glaze).then((id) => {
      return { id: id, glaze }
    })
  })
  Promise.all(addedGlazes)
    .then((glazes) => {
      return res.json({ glazes })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  return db.updateGlaze(Number(req.params.id), req.body.glaze)
    .then((glaze) => res.json({ glaze }))
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
