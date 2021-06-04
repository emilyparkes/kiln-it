const express = require('express')

const db = require('../db/shapes')
const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getShapes()
    .then((shapes) => res.json({shapes}))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const addedShapes = req.body.map(shape => {
    return db.addNewShape(shape)
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

module.exports = router
