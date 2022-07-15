/* eslint-disable promise/no-nesting */
const express = require('express')

const db = require('../db/clay')
const { getCreations } = require('../db/creations')
// const { prepForDb, prepForJS } = require('../server-utils')

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
  return db
    .addClay(req.body.clay)
    .then((id) => res.json({ id: id[0], clay: req.body.clay }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  console.log('route not made yet')
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  return existsInCreations(id)
    .then((exists) => {
      if (exists) {
        return db
          .getClayById(id)
          .then(() => {
            return db.updateClay(id, { in_use: false })
          })
          .then((clay) => res.json({ clay: clay }))
      }
      return db
        .deleteClay(id)
        .then((deleted) =>
          res.json({
            deleted: `${deleted} item(s) have been deleted successfully`,
          })
        )
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

function existsInCreations(id) {
  let exists = false
  return getCreations().then((creations) => {
    const filteredOut = creations.filter((creation) => creation.clayId === id)
    filteredOut.length > 0 ? (exists = true) : (exists = false)
    return exists
  })
}

module.exports = router
