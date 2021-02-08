const { testConn } = require('./connection')

let db = require('./statuses')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getStatuses returns the correct number of statuses', async () => {
  const statuses = await db.getStatuses(testConn)
  expect(statuses).toHaveLength(8)
})

test('getStatusById returns the correct status details', async () => {
  const id = 2
  const status = await db.getStatusById(id, testConn)
  expect(status.status).toBe('Leather Hard')
})
