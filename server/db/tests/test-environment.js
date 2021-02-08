const getDbConn = require('knex')

const testConfig = require('../knexfile').test

module.exports = {
  getTestDb: () => getDbConn(testConfig),
  initialise: async (db) => {
    await db.migrate.latest()
    return db.seed.run()
  },
  cleanup: (db) => {
    return db.destroy()
  }
}
