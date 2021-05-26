const { testConn } = require('./connection')

let db = require('./creations')

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(() => {
  return testConn.seed.run()
})

test('getCreations returns the correct number of creations', () => {
  return db.getCreations(testConn).then((creations) => {
    expect(creations).toHaveLength(9)
    return null
  })
})

test('getCreationById returns the correct creation details', () => {
  const id = 2
  return db.getCreationById(id, testConn).then((creation) => {
    expect(creation.clay).toBe('Grey Pebble')
    expect(creation.shape).toBe('Plate')
    expect(creation.status).toBe('Wet')
    expect(creation.glaze).toBe('White Matte')
    expect(creation.date_created).toBe('2020-05-24T14:45:30')
    expect(creation.date_complete).toBe('2020-06-24T14:45:30')
    expect(creation.note).toBe('Glaze with criss-cross pattern')
    return null
  })
})
