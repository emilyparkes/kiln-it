import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'
import connection from './connection'
import * as creations from './creations'

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
describe('Creations can ', () => {

  it('check a creation exists', async () => {
    expect.assertions(1)
    const id = 2
    const result = await creations.existsInCreations(id)

    expect(result).toStrictEqual(true)
  })

  it('return all creations', async () => {
    expect.assertions(2)
    const result = await creations.getCreations()

    expect(result).toHaveLength(12)
    expect(result[1]).toStrictEqual({
      id: 2,
      clayId: 2,
      clay: "Grey Pebble",
      shapeId: 2,
      shape: "Plate",
      statusId: 1,
      status: "Wet",
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: "2020-05-24T14:45:30",
      date_complete: "2020-06-24T14:45:30",
      description: "",
      note: "Glaze with criss-cross pattern",
      name: "Le Plate",
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: '',
      img_gallery: '',
    })
  })

  it('returns a single creation', async () => {
    expect.assertions(1)
    const id = 2
    const result = await creations.getCreationById(id)

    expect(result).toStrictEqual({
      id: 2,
      clayId: 2,
      clay: "Grey Pebble",
      shapeId: 2,
      shape: "Plate",
      statusId: 1,
      status: "Wet",
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: "2020-05-24T14:45:30",
      date_complete: "2020-06-24T14:45:30",
      description: "",
      note: "Glaze with criss-cross pattern",
      name: "Le Plate",
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: '',
      img_gallery: '',
    })
  })

  it('returns a single creation\'s glazes', async () => {
    expect.assertions(3)
    const id = 2
    const result = await creations.getGlazesByCreationId(id)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ glaze: 'Clear', id: 1 })
    expect(result[1]).toEqual({ glaze: 'White', id: 10})
  })

  it('adds a new creation', async () => {
    expect.assertions(3)
    const result = await creations.createCreation({
      clay_id: 1,
      clay: 'White',
      shape_id: 1,
      shape: 'Coffee Cup',
      status_id: 1,
      status: 'Wet',
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: '',
      date_complete: '',
      description: '',
      note: 'hi',
      name: 'Emily Test 1 not Deployed',
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: '',
      img_gallery: '',
      glazes:[{ glaze: 'White', id: 10}]
    })

    const expectedResult = {
      id: 13,
      clayId: 1,
      clay: 'White',
      shapeId: 1,
      shape: 'Coffee Cup',
      statusId: 1,
      status: 'Wet',
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: '',
      date_complete: null,
      description: '',
      note: 'hi',
      name: 'Emily Test 1 not Deployed',
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: '',
      img_gallery: '',
    }
    const allCreations = await creations.getCreations()
    const found = allCreations.find((creation => creation.id === 13))

    expect(result).toStrictEqual([13])
    expect(allCreations).toHaveLength(13)
    expect(found).toStrictEqual(expectedResult)
  })

  it('add a new creation\'s glazes', async () => {
    expect.assertions(3)
    const id = 9
    const glazeId = 10
    const result = await creations.createCreationGlazes(id, glazeId)

    const expectedResult = [17]
    const glazes = await creations.getGlazesByCreationId(id)

    expect(result).toStrictEqual(expectedResult)
    expect(glazes).toHaveLength(1)
    expect(glazes).toStrictEqual([ { id: 10, glaze: 'White' } ])
  })

  it('updates a single creation', async () => {
    expect.assertions(3)
    const creation = {
      id: 2,
      clay_id: 2,
      clay: 'Grey Pebble',
      shape_id: 2,
      shape: 'Plate',
      status_id: 1,
      status: 'Wet',
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: '2020-05-24T14:45:30',
      date_complete: '2020-06-24T14:45:30',
      description: '',
      note: 'Glaze with wave pattern',
      name: 'XL Latte',
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: '',
      img_gallery: '',
      glazes: [
      {
        id: 1,
        glaze: 'Clear'
      },
      {
        id: 10,
        glaze: 'White'
      }
      ]
    }
    await creations.updateCreationById(2, creation)

    const result = await creations.getCreations()
    const found = result.find((creation => creation.id === 2))
    
    expect(result[1].name).toBe('XL Latte')
    expect(found?.name).toBe('XL Latte')
    expect(found?.note).toBe("Glaze with wave pattern")
  })

  it('updates a single creation\'s status', async () => {
    expect.assertions(2)
    const id = 2
    const editedCreation = 	{
      id: 2,
      clay_id: 2,
      clay: "Grey Pebble",
      shape_id: 2,
      shape: "Plate",
      status_id: 2,
      status: "Leather Hard",
      weight_leather_hard: 0,
      weight_bone_dry: 0,
      weight_bisque_fired: 0,
      weight_glazed: 0,
      weight_complete: 0,
      date_created: "2020-05-24T14:45:30",
      date_complete: "2020-06-24T14:45:30",
      description: "",
      note: "Glaze with criss-cross pattern",
      name: "Le Plate",
      img_leather_hard: '',
      img_bisque_fired: '',
      img_glazed: '',
      img_complete: "",
      img_gallery: '',
      glazes: [
        {
          id: 1,
          glaze: "Clear"
        },
        {
          id: 10,
          glaze: "White"
        }
      ]
    }
    await creations.updateCreationById(id, editedCreation)
    const result = await creations.getCreations()
    const found = result.find((creation => creation.id === 2))
    
    expect(result[1].statusId).toBe(2)
    expect(found?.status).toBe('Leather Hard')
  })

  it('deletes a creation and it\'s glazes', async () => {
    expect.assertions(2)
    const id = 2
    await creations.deleteCreationGlazes(id)
    await creations.deleteCreation(id)

    const result = await creations.getCreations()
    const found = result.find((creation => creation.id === id))
    
    expect(result).toHaveLength(11)
    expect(found).toBeUndefined()
  })

})