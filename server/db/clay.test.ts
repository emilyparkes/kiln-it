import testConn from './connection'
import * as db from './clay'
import { beforeAll, beforeEach, afterAll, test, expect } from 'vitest'

beforeAll(() => {
  return testConn.migrate.latest()
})

beforeEach(async () => {
  await testConn.seed.run()
})

afterAll(() => {
  return testConn.destroy()
})

test('getClay returns the correct number of clay', () => {
  return db.getClay(testConn).then((clay) => {
    expect(clay).toHaveLength(3)
    return null
  })
})

test('getClayById returns the correct clay details', () => {
  const id = 2
  return db.getClayById(id, testConn).then((clay) => {
    expect(clay.clay).toBe('Grey Pebble')
    return null
  })
})

test('deleting a clay that is in use fails', () => {
  return db
    .deleteClay(1)
    .then(() => ({ error: null }))
    .catch((error) => ({ error }))
    .then((obj) => {
      expect(obj.error).not.toBeNull()
      expect(obj.error.message).toMatchInlineSnapshot('"delete from `clay` where `id` = 1 - SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"')
    })
})
