const express = require('express')

const db = require('../db/glazes')
const { prepForDb, prepForJS } = require('../server-utils')

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
  const addedGlazes = req.body.map(glaze => {
    return db.addNewGlaze(glaze)
      .then((id) => {
        return { id: id[0], glaze }
      })
  })
  Promise.all(addedGlazes)
    .then((glazes) => res.json({ glazes }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
