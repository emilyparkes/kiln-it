/* eslint-disable promise/no-nesting */
import express from 'express'
import { Creation } from '../../models/Creation'

import * as db from '../db/clay'
import { getCreations } from '../db/creations'
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  return db
    .getClay()
    .then((clay) => res.json(clay))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  return db
    .addClay(req.body.clay)
    .then((id) => res.json({ id: id, clay: req.body.clay }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
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
          .then((clay) => {
            return res.json({ clay: clay })
          })
      }
      return db.deleteClay(id).then((deleted) =>
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

export function existsInCreations(id: number): Promise<boolean> {
  let exists = false
  return getCreations().then((creations: Creation[]) => {
    const filteredOut = creations.filter((creation) => creation.clayId === id)
    filteredOut.length > 0 ? (exists = true) : (exists = false)
    return exists
  })
}

export default router
