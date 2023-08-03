import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'

import connection from './connection'
import * as clay from './clay'

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
describe('clay can ', () => {


  it('return all clay', async () => {
    expect.assertions(2)
    const result = await clay.getClay()

    expect(result).toHaveLength(4)
    expect(result[1]).toStrictEqual({ id: 2, clay: 'Grey Pebble', in_use: 1 })
  })

  it('return a single clay', async () => {
    expect.assertions(1)
    const id = 2
    const result = await clay.getClayById(id)

    expect(result).toStrictEqual({ id: 2, clay: 'Grey Pebble', in_use: 1 })
  })

  it('add a new clay', async () => {
    expect.assertions(3)
    const result = await clay.addClay({ clay: 'White Speckle'})

    const expectedResult = { id: 5, clay: 'White Speckle', in_use: 1 }
    
    const allClay = await clay.getClay()
    const found = allClay.find((clay => clay.id === 5))

    expect(result).toStrictEqual([5])
    expect(allClay).toHaveLength(5)
    expect(found).toStrictEqual(expectedResult)
  })

  it('update a single clay', async () => {
    expect.assertions(3)
    const id = 2
    const editedClay = { id: 2, clay: 'Grey Pebbled', in_use: false }
    await clay.updateClay(id, editedClay)

    const result = await clay.getClay()
    const found = result.find((clay => clay.id === id))
    
    expect(result[1].clay).toBe('Grey Pebbled')
    expect(found?.clay).toBe('Grey Pebbled')
    expect(found?.in_use).toBe(0)
  })

  it('delete a clay if it is not in use on any creations', async () => {
    expect.assertions(2)
    const id = 4
    await clay.deleteClay(id)

    const result = await clay.getClay()
    const found = result.find((clay => clay.id === id))
    
    expect(result).toHaveLength(3)
    expect(found).toBeUndefined()
  })

})