const { testConn } = require('./connection')

let db = require('./shapes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getShapes returns the correct number of shapes', async () => {
  const shapes = await db.getShapes(testConn)
  expect(shapes).toHaveLength(7)
})

test('getShapeById returns the correct shape details', async () => {
  const id = 2
  const shape = await db.getShapeById(id, testConn)
  expect(shape.shape_type).toBe('Plate')
})
