const express = require('express')

const db = require('../db/creations')
const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCreations()
    .then((creations) => res.json(creations))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  db.getCreationById(Number(req.params.id))
    .then((creation) => {
      if (!creation) {
        return res.status(404).json({
          error: 'creation id not found'
        })
      }
      res.json(creation)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  console.log('body: ', req.body)
  const creation = prepForDb(req.body)
  db.updateCreationById(Number(req.params.id), creation)
    .then((creation) => {
      if (!creation) {
        return res.status(404).json({
          error: 'creation id not found'
        })
      }
      creation = prepForJS(creation)
      res.json(creation)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
