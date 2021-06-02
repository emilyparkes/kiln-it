const express = require('express')

const db = require('../db/clay')
const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getClay()
    .then((clay) => res.json(clay))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {

})

module.exports = router
