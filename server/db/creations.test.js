const { testConn } = require('./connection')

let db = require('./creations')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getCreations returns the correct number of creations', async () => {
  const creations = await db.getCreations(testConn)
  expect(creations).toHaveLength(9)
})

test('getCreationById returns the correct creation details', async () => {
  const id = 2
  const creation = await db.getCreationById(id, testConn)
  expect(creation.clay).toBe('Grey Pebble')
  expect(creation.shape).toBe('Plate')
  expect(creation.status).toBe('Wet')
  expect(creation.glaze).toBe('White Matte')
  expect(creation.date_created).toBe('2020-05-24T14:45:30')
  expect(creation.date_complete).toBe('2020-06-24T14:45:30')
  expect(creation.makers_note).toBe('Glaze with criss-cross pattern')
})
