/* eslint-disable promise/no-nesting */
import express from 'express'
// import { Creation } from '../../models/Creation'
import * as db from '../db/clay'
import { 
  // getCreations, 
  existsInCreations } from '../db/creations'
// const { prepForDb, prepForTS } = require('../server-utils')
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
    .addClay(req.body)
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
            return db.updateClay(id, { inUse: false })
          })
          .then((clay) => {
            return res.json({
              updated: `${clay} item have been updated successfully to be marked as not in use`,
            })
          })
      }
      return db.deleteClay(id).then((deleted) =>
        res.json({
          deleted: `${deleted} item have been deleted successfully`,
        })
      )
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})


export default router
