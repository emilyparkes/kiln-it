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

router.patch('/:id', (req, res) => {

})

module.exports = router
