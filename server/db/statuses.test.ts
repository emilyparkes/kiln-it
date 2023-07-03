const { testConn } = require('./connection')

let db = require('./statuses')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

afterAll(() => {
  return testConn.destroy()
})

test('getStatuses returns the correct number of statuses', () => {
  return db.getStatuses(testConn).then((statuses) => {
    expect(statuses).toHaveLength(8)
    return null
  })
})
