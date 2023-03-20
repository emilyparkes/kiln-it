/* eslint-disable promise/no-nesting */
import express from 'express'

import db from '../db/creations'
import { prepForDb, prepForJS } from '../server-utils'

const router = express.Router()

// /api/v1/creations

router.get('/', (req, res) => {
  db.getCreations()
    .then((creations) => {
      return Promise.all(
        creations.map((creation) => {
          return db.getGlazesByCreationId(creation.id).then((glazes) => {
            creation.glazes = glazes
            creation = prepForJS(creation)
            return creation
          })
        })
      )
    })
    .then((creations) => res.json(creations))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.post('/new-creation', (req, res) => {
  const dbCreation = prepForDb(req.body)
  let creationId = null
  db.createCreation(dbCreation)
    .then((creationIdArr) => {
      creationId = creationIdArr[0]
      return Promise.all(
        dbCreation.glazes.map((glazeObj) => {
          return db.createCreationGlazes(creationId, glazeObj.id)
        })
      )
    })
    .then(() => {
      return db.getCreationById(creationId).then((creation) => {
        return db.getGlazesByCreationId(creation.id).then((glazes) => {
          creation.glazes = glazes
          creation = prepForJS(creation)
          res.json(creation)
        })
      })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

// /api/v1/creations
router.patch('/update-creation/:id', (req, res) => {
  const dbCreation = prepForDb(req.body)
  const creationId = Number(req.params.id)

  db.updateCreationById(creationId, dbCreation)
    .then((creation) => {
      if (!creation) {
        return res.status(404).json({
          error: 'creation id not found',
        })
      } else {
        return Promise.all(
          dbCreation.glazes.map((glazeObj) => {
            return db.createCreationGlazes(creationId, glazeObj.id)
          })
        )
      }
    })
    .then(() =>
      db.getCreationById(creationId).then((creation) =>
        db.getGlazesByCreationId(creation.id).then((glazes) => {
          creation.glazes = glazes
          creation = prepForJS(creation)
          res.json(creation)
        })
      )
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/update-creation-status/:id', (req, res) => {
  const dbCreation = prepForDb(req.body)
  const creationId = Number(req.params.id)

  db.updateCreationStatusById(creationId, dbCreation)
    .then((creation) => {
      if (!creation) {
        return res.status(404).json({
          error: 'creation id not found',
        })
      }
      creation = prepForJS(creation)
      res.json(creation)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  const creationId = Number(req.params.id)
  db.getCreationById(creationId)
    .then((creation) =>
      db.getGlazesByCreationId(creation.id).then((glazes) => {
        creation.glazes = glazes
        creation = prepForJS(creation)
        res.json(creation)
      })
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  const creationId = Number(req.params.id)

  db.deleteCreationGlazes(creationId)
    .then(() =>
      db.deleteCreation(creationId).then((deleted) =>
        res.json({
          deleted: `${deleted} item(s) have been deleted successfully`,
        })
      )
    )
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

export default router
