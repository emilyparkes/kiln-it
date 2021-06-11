const express = require('express')

const db = require('../db/shapes')
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getShapes()
    .then((shapes) => res.json({ shapes }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const addedShapes = req.body.map(shape => {
    return db.addShape(shape)
      .then((id) => {
        return { id: id[0], shape }
      })
  })
  Promise.all(addedShapes)
    .then((shapes) => res.json({ shapes }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  return db.updateShape(Number(req.params.id), req.body.shape)
    .then((shape) => res.json({ shape }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  return db.deleteShape(Number(req.params.id))
    .then((deleted) => res.json({ deleted: `${deleted} item(s) have been deleted successfully` }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
