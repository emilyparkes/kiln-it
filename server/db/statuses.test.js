const { testConn } = require('./connection')

let db = require('./statuses')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getStatuses returns the correct number of statuses', () => {
  return db.getStatuses(testConn).then((statuses) => {
    expect(statuses).toHaveLength(8)
    return null
  })
})

test('getStatusById returns the correct status details', () => {
  const id = 2
  return db.getStatusById(id, testConn).then((status) => {
    expect(status.status).toBe('Leather Hard')
    return null
  })
})
