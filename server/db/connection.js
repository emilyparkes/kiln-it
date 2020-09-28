const environment = process.env.NODE_ENV || 'development'

const knex = require('knex')
const config = require('./knexfile')[environment]
const connection = knex(config)

const testConfig = require('./knexfile').test
const testConn = knex(testConfig)

module.exports = {
  connection,
  testConn
}
