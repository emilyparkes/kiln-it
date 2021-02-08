const express = require('express')

const db = require('../db/creations')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const creations = await db.getCreations()
    res.json(creations)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const creation = await db.getCreationById(Number(req.params.id))
    if (!creation) {
      return res.status(404).json({
        error: 'creation id not found'
      })
    }
    res.json(creation)
    return null
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router
