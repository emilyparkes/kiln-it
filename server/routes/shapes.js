const express = require('express')

const db = require('../db/creations')
const { prepForDb, prepForJS } = require('../server-utils')

const router = express.Router()

router.post('/', (req, res) => {
  console.log('body: ', req.body)
  const creation = prepForDb(req.body)
  const 
  req.body.map(shape => {
    db.addNewShape(shape)
  })
  // db.addShape()
  //   .then((creation) => {
  //     if (!creation) {
  //       return res.status(404).json({
  //         error: 'creation id not found'
  //       })
  //     }
  //     creation = prepForJS(creation)
  //     res.json(creation)
  //     return null
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //     res.sendStatus(500)
  //   })
})

module.exports = router
