const express = require('express')

const db = require('../db/clay')
const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getClay()
    .then((clay) => res.json({ clay }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const addedClays = req.body.map(clay => {
    return db.addNewClay(clay)
      .then((id) => {
        return { id: id[0], clay }
      })
  })
  Promise.all(addedClays)
    .then((clays) => res.json({ clays }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
