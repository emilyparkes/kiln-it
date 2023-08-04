import express from 'express'

import * as creations from '../db/creations'
import * as glazes from '../db/glazes'
import * as statuses from '../db/statuses'
import * as clay from '../db/clay'
import * as shapes from '../db/shapes'

import { prepForJS } from '../server-utils'
import { Options } from '../../models/Options'

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
      allItems.map((tableArr) => tableArr.map((obj: Options ) => prepForJS(obj)))
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
