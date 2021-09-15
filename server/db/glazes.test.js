const { testConn } = require('./connection')

let db = require('./glazes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getGlazes returns the correct number of clay', () => {
  return db.getGlazes(testConn).then((glaze) => {
    expect(glaze).toHaveLength(8)
    return null
  })
})
