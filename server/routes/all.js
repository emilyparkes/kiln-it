const express = require('express')

const getCreations = require('../db/creations').getCreations
const getGlazes = require('../db/glazes').getGlazes
const getStatuses = require('../db/statuses').getStatuses
const getClay = require('../db/clay').getClay
const getShapes = require('../db/shapes').getShapes

const { prepForJS } = require('../utils')

const router = express.Router()

router.get('/', (req, res) => {
  const allItems = [getCreations(), getGlazes(), getStatuses(), getClay(), getShapes()]
  Promise.all(allItems)
    .then((allItems) => allItems.map(tableArr => tableArr.map((obj) => prepForJS(obj))))
    .then(([creations, glazes, statuses, clay, shapes]) => {
      const allItems = {
        creations,
        glazes,
        statuses,
        clay,
        shapes
      }
      res.json(allItems)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
