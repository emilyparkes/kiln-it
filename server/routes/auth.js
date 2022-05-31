const express = require('express')

const db = require('../db/users')

// const { prepForJS } = require('../server-utils')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, uid } = req.body
  return db.createUserRole(email, uid)
    .then(() => db.getUserRole(uid))
    .then(user => res.json(user))
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = router
