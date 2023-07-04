import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/shapes'

import { mockShapes, mockNewShape, mockNewShapeResult, mockModifiedShape, mockModifiedShapeResult} from './mocks/shapes-mocks'
import { mockFormCreation } from './mocks/creations-mocks'


describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('Dirty Hands Studio').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

vi.mock('../db/shapes')

beforeEach(() => {
  vi.resetAllMocks()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

// GET
describe('GET /api/v1/shapes', async () => {
  it('returns the correct number of shapes', async () => {
    expect.assertions(5)
    vi.mocked(db.getShapes).mockResolvedValue(mockShapes)
    
    const res = await request(server).get('/api/v1/shapes')

    expect(res.body).toHaveLength(3)
    expect(db.getShapes).toHaveBeenCalledOnce()
    expect(res.body[0].id).toEqual(1)
    expect(res.body[0].shape).toEqual('Coffee Cup')
    expect(200)
  })

  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getShapes).mockRejectedValue(new Error('Route error'))

    const res = await request(server).get('/api/v1/shapes')

    expect(res.statusCode).toBe(500)
  })
})

// TODO: Think this route should change to being when a new glaze option is created - for now test as is
// POST
describe('POST /api/v1/shapes', () => {
  it('adds a new shape to the database', async () => {
    expect.assertions(2)
    vi.mocked(db.addShape).mockResolvedValue([4])

    const res = await request(server).post('/api/v1/shapes').send(mockNewShape)

    expect(res.body).toStrictEqual(mockNewShapeResult)
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.addShape).mockRejectedValue(new Error('Route error'))

    const res = await request(server).post('/api/v1/shapes').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// PATCH /:id
describe('PATCH /api/v1/shapes/:id', () => {
  it('updates shape details', async () => {
    expect.assertions(3)
    vi.mocked(db.updateShape).mockResolvedValue(1)
    vi.mocked(db.getShapeById).mockResolvedValue(mockModifiedShapeResult)


    const res = await request(server).patch('/api/v1/shapes/2').send(mockModifiedShape)
    
    expect(res.body).toStrictEqual(mockModifiedShapeResult)
    expect(res.statusCode).toBe(200)
    expect(db.updateShape).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.updateShape).mockRejectedValue(new Error('Route error'))

    const res = await request(server).patch('/api/v1/shapes/2').send(mockModifiedShape)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE
describe('DELETE /api/v1/shapes/:id', () => {
  it('deletes a specific shape', async () => {
    const mockDeleted = 1

    expect.assertions(3)
    vi.mocked(db.deleteShape).mockResolvedValue(mockDeleted)

    const res = await request(server).delete('/api/v1/shapes/2')
    expect(db.deleteShape).toHaveBeenCalledOnce()
    expect(res.body).toStrictEqual({
      deleted: `${mockDeleted} item(s) have been deleted successfully`,
    })
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.deleteShape).mockRejectedValue(new Error('Route error'))

    const res = await request(server).delete('/api/v1/shapes/99999').send(mockFormCreation)
    expect(res.statusCode).toBe(500)
  })
})