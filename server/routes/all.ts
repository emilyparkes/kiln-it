import express from 'express'

import creations from '../db/creations'
import glazes from '../db/glazes'
import statuses from '../db/statuses'
import clay from '../db/clay'
import shapes from '../db/shapes'

import { prepForJS } from '../server-utils'

const router = express.Router()

router.get('/', (req, res) => {
  const allItems = [
    creations.getCreations(),
    glazes.getGlazes(),
    statuses.getStatuses(),
    clay.getClay(),
    shapes.getShapes(),
  ]
  Promise.all(allItems)
    .then((allItems) =>
      allItems.map((tableArr) => tableArr.map((obj) => prepForJS(obj)))
    )
    .then(([creations, glazes, statuses, clay, shapes]) => {
      const allItems = {
        creations,
        glazes,
        statuses,
        clay,
        shapes,
      }
      res.json(allItems)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
