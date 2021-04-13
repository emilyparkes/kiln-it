const { testConn } = require('./connection')

let db = require('./shapes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getShapes returns the correct number of shapes', () => {
  return db.getShapes(testConn).then((shapes) => {
    expect(shapes).toHaveLength(7)
    return null
  })
})

test('getShapeById returns the correct shape details', () => {
  const id = 2
  return db.getShapeById(id, testConn).then((shape) => {
    expect(shape.shape).toBe('Plate')
    return null
  })
})
