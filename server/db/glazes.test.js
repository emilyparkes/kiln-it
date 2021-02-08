const { testConn } = require('./connection')

let db = require('./glazes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getGlazes returns the correct number of clay', async () => {
  const glaze = await db.getGlazes(testConn)
  expect(glaze).toHaveLength(8)
})

test('getGlazeById returns the correct glaze details', async () => {
  const id = 2
  const glaze = await db.getGlazeById(id, testConn)
  expect(glaze.glaze).toBe('White Matte')
})
