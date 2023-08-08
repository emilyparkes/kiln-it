/* eslint-disable promise/no-nesting */
import express from 'express'

import * as db from '../db/creations'
import { DBGlaze, Glaze } from '../../models/Glaze'
import { prepForDB, prepForTS } from '../server-utils'
import { DBCreation, SnakeCreation } from '../../models/Creation'

const router = express.Router()

// /api/v1/creations
router.get('/', (req, res) => {
  db.getCreations()
    .then((creations) => {
      return Promise.all(
        creations.map((creation) => {
          return db.getGlazesByCreationId(creation.id).then((glazes) => {
            creation.glazes = glazes
            creation = prepForTS(creation) as DBCreation
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
  const dbCreation = prepForDB(req.body) as SnakeCreation
  let creationId = 0
  dbCreation.date_created = `${Date.now()}`
  db.createCreation(dbCreation)
    .then((creationIdArr) => {
      creationId = creationIdArr[0]
      return Promise.all(
        dbCreation.glazes.map((glazeObj: Partial<DBGlaze>) => {
          if (glazeObj.id) {
            return db.createCreationGlazes(creationId, glazeObj.id)
          } else {
            throw new Error ('Missing glaze id argument')
          }
        })
      )
    })
    .then(() => {
      return db.getCreationById(creationId).then((creation) => {
        return db.getGlazesByCreationId(creation.id).then((glazes) => {
          creation.glazes = glazes
          creation = prepForTS(creation)
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
  const dbCreation = prepForDB(req.body) as SnakeCreation
  const creationId = Number(req.params.id)

  db.updateCreationById(creationId, dbCreation)
    .then((success) => {
      if (!success) {
        res.status(404).json({
          error: 'creation id not found',
        })
      } else {
        return Promise.all(
          dbCreation.glazes.map((glazeObj: Partial<DBGlaze>) => {
            if (glazeObj.id) {
              return db.createCreationGlazes(creationId, glazeObj.id)
            } else {
              throw new Error ('Missing glaze id argument')
            }
          })
        ).then(() =>
          db.getCreationById(creationId).then((creation) =>
            db.getGlazesByCreationId(creation.id).then((glazes) => {
              creation.glazes = glazes
              creation = prepForTS(creation)
              res.json(creation)
            })
          )
        )
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

router.patch('/update-creation-status/:id', (req, res) => {
  const dbCreation = prepForDB(req.body) as SnakeCreation
  const creationId = Number(req.params.id)

  db.updateCreationStatusById(creationId, dbCreation)
    .then((success) => {
      if (!success) {
        res.status(404).json({
          error: 'creation id not found',
        })
      } else {
        return db.getCreationById(creationId).then((creation) =>
          db.getGlazesByCreationId(creation.id).then((glazes) => {
            creation.glazes = glazes
            creation = prepForTS(creation)
            res.json(creation)
          })
        )
      }
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
        creation = prepForTS(creation)
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
