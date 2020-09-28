const { testConn } = require('./connection')

let db = require('./clay')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getClay returns the correct number of clay', () => {
  return db.getClay(testConn)
    .then(clay => {
      expect(clay).toHaveLength(3)
      return null
    })
})

test('getClayById returns the correct clay details', () => {
  const id = 2
  return db.getClayById(id, testConn)
    .then(clay => {
      expect(clay.clay).toBe('Grey Pebble')
      return null
    })
})
