const { testConn } = require('./connection')

let db = require('./glazes')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getGlazes returns the correct number of glazes', () => {
  return db.getGlazes(testConn).then((glazes) => {
    expect(glazes).toHaveLength(11)
    return null
  })
})
