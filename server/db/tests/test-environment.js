const getDbConn = require('knex')

const testConfig = require('../knexfile').test

export default {
  getTestDb: () => getDbConn(testConfig),
  initialise: (db) => {
    return db.migrate.latest().then(() => {
      return db.seed.run()
    })
  },
  cleanup: (db) => {
    return db.destroy()
  },
}
