const { testConn } = require('./connection')

let db = require('./clay')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getClay returns the correct number of clay', async () => {
  const clay = await db.getClay(testConn)
  expect(clay).toHaveLength(3)
})

test('getClayById returns the correct clay details', async () => {
  const id = 2
  const clay = await db.getClayById(id, testConn)
  expect(clay.clay).toBe('Grey Pebble')
})
