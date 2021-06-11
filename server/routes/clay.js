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
  const addedClay = req.body.map(clay => {
    return db.addClay(clay)
      .then((id) => {
        return { id: id[0], clay }
      })
  })
  Promise.all(addedClay)
    .then((clay) => res.json({ clay }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  console.log('route not made yet')
})

router.delete('/:id', (req, res) => {
  return db.deleteClay(Number(req.params.id))
    .then((deleted) => res.json({ deleted: `${deleted} item(s) have been deleted successfully` }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
