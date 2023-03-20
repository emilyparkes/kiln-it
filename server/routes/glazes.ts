import express from 'express'

import db from '../db/glazes'
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGlazes()
    .then((glazes) => res.json({ glazes }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const addedGlazes = req.body.map((glaze) => {
    return db.addGlaze(glaze).then((id) => {
      return { id: id[0], glaze }
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
  return db
    .updateGlaze(Number(req.params.id), req.body.glaze)
    .then((glaze) => res.json({ glaze }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  return db
    .deleteGlaze(Number(req.params.id))
    .then((deleted) =>
      res.json({ deleted: `${deleted} item(s) have been deleted successfully` })
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
