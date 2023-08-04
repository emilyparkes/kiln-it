import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'

import connection from './connection'
import * as glazes from './glazes'


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
describe('glazes can ', () => {


  it('return all glazes', async () => {
    expect.assertions(2)
    const result = await glazes.getGlazes()

    expect(result).toHaveLength(11)
    expect(result[1]).toStrictEqual({ id: 2, glaze: 'White Matte', underglaze: 0, in_use: 1 },)
  })

  it('return a single glaze', async () => {
    expect.assertions(1)
    const id = 2
    const result = await glazes.getGlazeById(id)

    expect(result).toStrictEqual({ id: 2, glaze: 'White Matte', underglaze: 0, in_use: 1 },)
  })

  it('add a new glaze', async () => {
    expect.assertions(3)
    const result = await glazes.addGlaze({ glaze: 'Ocean'})

    const expectedResult = { id: 12, glaze: 'Ocean', underglaze: null, in_use: 1 }
    
    const allglazes = await glazes.getGlazes()
    const found = allglazes.find((glazes => glazes.id === 12))

    expect(result).toStrictEqual([12])
    expect(allglazes).toHaveLength(12)
    expect(found).toStrictEqual(expectedResult)
  })

  it('update a single glaze', async () => {
    expect.assertions(3)
    const id = 2
    const editedGlazes = { glaze: 'White Matte Sheer'}
    await glazes.updateGlaze(id, editedGlazes)

    const result = await glazes.getGlazes()
    const found = result.find((glazes => glazes.id === id))
    
    expect(result[1].glaze).toBe('White Matte Sheer')
    expect(found?.glaze).toBe('White Matte Sheer')
    expect(found?.in_use).toBe(1)
  })

  it('delete a glazes if it is not in use on any creations', async () => {
    expect.assertions(2)
    const id = 12
    await glazes.deleteGlaze(id)

    const result = await glazes.getGlazes()
    const found = result.find((glaze => glaze.id === id))
    
    expect(result).toHaveLength(11)
    expect(found).toBeUndefined()
  })

})