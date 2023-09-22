import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'

import connection from './connection'
import * as statuses from './statuses'


beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.migrate.rollback()
  await connection.destroy()
})

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('Kiln-it').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

//  ------------- TESTS ------------- 
describe('statuses can ', () => {


  it('return all statuses', async () => {
    expect.assertions(2)
    const result = await statuses.getStatuses()

    expect(result).toHaveLength(9)
    expect(result[1]).toStrictEqual({ id: 2, status: 'Leather Hard' })
  })

  it('return a single status', async () => {
    expect.assertions(1)
    const id = 2
    const result = await statuses.getStatusById(id)

    expect(result).toStrictEqual({ id: 2, status: 'Leather Hard' })
  })

  it('add a new status', async () => {
    expect.assertions(3)
    const result = await statuses.addStatus({ status: 'Awaiting Pick Up' })

    const expectedResult = { id: 10, status: 'Awaiting Pick Up' }
    
    const allstatuses = await statuses.getStatuses()
    const found = allstatuses.find((status => status.id === 10))

    expect(result).toStrictEqual([10])
    expect(allstatuses).toHaveLength(10)
    expect(found).toStrictEqual(expectedResult)
  })

  it('update a single status', async () => {
    expect.assertions(2)
    const id = 7
    const editedstatus = { status: 'Awaiting Collection'}
    await statuses.updateStatus(id, editedstatus)

    const result = await statuses.getStatuses()
    const found = result.find((status => status.id === id))
    
    expect(result[6].status).toBe('Awaiting Collection')
    expect(found?.status).toBe('Awaiting Collection')
  })

  it('delete a statuses if it is not in use on any creations', async () => {
    expect.assertions(2)
    const id = 9
    await statuses.deleteStatus(id)

    const result = await statuses.getStatuses()
    const found = result.find((status => status.id === id))
    
    expect(result).toHaveLength(8)
    expect(found).toBeUndefined()
  })

})