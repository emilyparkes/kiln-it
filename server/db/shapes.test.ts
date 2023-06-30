const { testConn } = require('./connection')

let db = require('./shapes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

afterAll(() => {
  return testConn.destroy()
})

test('getShapes returns the correct number of shapes', () => {
  return db.getShapes(testConn).then((shapes) => {
    expect(shapes).toHaveLength(7)
    return null
  })
})
