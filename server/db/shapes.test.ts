import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'

import connection from './connection'
import * as shapes from './shapes'


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
describe('shapes can ', () => {


  it('return all shapes', async () => {
    expect.assertions(2)
    const result = await shapes.getShapes()

    expect(result).toHaveLength(8)
    expect(result[1]).toStrictEqual({ id: 2, shape: 'Plate', in_use: 1 })
  })

  it('return a single shape', async () => {
    expect.assertions(1)
    const id = 2
    const result = await shapes.getShapeById(id)

    expect(result).toStrictEqual({ id: 2, shape: 'Plate', in_use: 1 })
  })

  it('add a new shape', async () => {
    expect.assertions(3)
    const result = await shapes.addShape({ shape: 'Platter' })

    const expectedResult = { id: 2, shape: 'Plate', in_use: 1 }
    
    const allshapes = await shapes.getShapes()
    const found = allshapes.find((shape => shape.id === 2))

    expect(result).toStrictEqual([9])
    expect(allshapes).toHaveLength(9)
    expect(found).toStrictEqual(expectedResult)
  })

  it('update a single shape', async () => {
    expect.assertions(3)
    const id = 2
    const editedShape = { shape: 'Large Dinner Plate'}
    await shapes.updateShape(id, editedShape)

    const result = await shapes.getShapes()
    const found = result.find((shape => shape.id === id))
    
    expect(result[1].shape).toBe('Large Dinner Plate')
    expect(found?.shape).toBe('Large Dinner Plate')
    expect(found?.in_use).toBe(1)
  })

  it('delete a shapes if it is not in use on any creations', async () => {
    expect.assertions(2)
    const id = 8
    await shapes.deleteShape(id)

    const result = await shapes.getShapes()
    const found = result.find((shape => shape.id === id))
    
    expect(result).toHaveLength(7)
    expect(found).toBeUndefined()
  })

})