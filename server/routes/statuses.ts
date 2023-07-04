import express from 'express'

import * as db from '../db/statuses'
import { Status } from '../../models/Status'
// const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getStatuses()
    .then((statuses) => res.json(statuses))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const addedStatuses = req.body.map((statusObj:Status) => {
    return db.addStatus(statusObj)
      .then((idArr) => {
        const id = idArr[0]
        return { id: id, status: statusObj.status }
      })
  })
  Promise.all(addedStatuses)
    .then((statuses) => res.json(statuses))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', (req, res) => {
  return db.updateStatus(Number(req.params.id), req.body.status)
    .then(() => {
      db.getStatusById(Number(req.params.id))
      .then((status) => res.json(status))
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  return db.deleteStatus(Number(req.params.id))
    .then((deleted) => res.json({ deleted: `${deleted} item(s) have been deleted successfully` }))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
