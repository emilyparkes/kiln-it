const express = require('express')

const db = require('../db/statuses')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStatuses()
    .then((statuses) => res.json({ statuses }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  db.getStatusById(Number(req.params.id))
    .then((status) => {
      if (!status) {
        return res.status(404).json({
          error: 'status id not found'
        })
      }
      res.json(status)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
