const express = require('express')

const db = require('../db/statuses')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const statuses = await db.getStatuses()
    res.json({ statuses })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  const status = await db.getStatusById(Number(req.params.id))
  try {
    if (!status) {
      return res.status(404).json({
        error: 'status id not found'
      })
    }
    res.json(status)
    return null
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router
