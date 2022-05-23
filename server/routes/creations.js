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

router.post('/', (req, res) => {
  //
})

router.patch('/:id', (req, res) => {
  const dbCreation = prepForDb(req.body)
  db.updateCreationById(Number(req.params.id), dbCreation)
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

router.delete('/:id', (req, res) => {
  return db.deleteCreation(Number(req.params.id))
    .then((deleted) => res.json({ deleted: `${deleted} item(s) have been deleted successfully` }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
