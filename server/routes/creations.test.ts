import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/creations'
import { mockCreations, mockNewCreationId, mockFormCreation, mockNewCreation, mockNewCreationResult } from './mocks/creations-mocks'
import { mockGlazes, mockNewGlazesResult } from './mocks/glazes-mocks'

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('Dirty Hands Studio').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

vi.mock('../db/creations')

beforeEach(() => {
  vi.resetAllMocks()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

// GET
describe('GET /api/v1/creations', async () => {
  it('returns the correct number of creations', async () => {
    expect.assertions(5)
    vi.mocked(db.getCreations).mockResolvedValue(mockCreations)
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockGlazes)
    
    const res = await request(server).get('/api/v1/creations')
    
    expect(res.body).toHaveLength(2)
    expect(db.getCreations).toHaveBeenCalledOnce()
    expect(res.body[0].id).toEqual(1)
    expect(res.body[0].name).toEqual('Le Vase')
    expect(200)
  })
  
  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getCreations).mockRejectedValue(new Error('Route error'))

    const res = await request(server).get('/api/v1/creations')
    expect(res.statusCode).toBe(500)
  })
})

// GET /:id
describe('GET /api/v1/creations/:id', async () => {
  it('returns the correct creation', async () => {
    expect.assertions(10)
    vi.mocked(db.getCreationById).mockResolvedValue(mockCreations[1])
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockGlazes)

    const res = await request(server).get('/api/v1/creations/2')
    
    expect(db.getCreationById).toHaveBeenCalledOnce()
    expect(res.body.id).toEqual(2)
    expect(res.body.clay).toBe('Grey Pebble')
    expect(res.body.shapeId).toBe(2)
    expect(res.body.statusId).toBe(1)
    expect(res.body.dateCreated).toBe('2020-05-24T14:45:30')
    expect(res.body.dateComplete).toBe('2020-06-24T14:45:30')
    expect(res.body.note).toBe('Glaze with criss-cross pattern')
    expect(res.body.name).toEqual('Le Plate')
    expect(200)
  })
  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getCreations).mockRejectedValue(new Error('Route error'))
  
    const res = await request(server).get('/api/v1/creations/2')
    
    expect(res.statusCode).toBe(500)
  })
})

// POST
describe('POST /api/v1/creations/new-creation', () => {
  it('adds a new creation to the database', async () => {
    expect.assertions(3)
    vi.mocked(db.createCreation).mockResolvedValue(mockNewCreationId)
    vi.mocked(db.createCreationGlazes).mockResolvedValue([1])
    vi.mocked(db.getCreationById).mockResolvedValue(mockNewCreation)
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockNewGlazesResult)


    const res = await request(server).post('/api/v1/creations/new-creation').send(mockFormCreation)
    
    expect(res.body).toStrictEqual(mockNewCreationResult)
    expect(res.statusCode).toBe(200)
    expect(db.createCreation).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.createCreation).mockRejectedValue(new Error('Route error'))
    const res = await request(server).post('/api/v1/creations/new-creation').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// PATCH /:id
describe('PATCH /api/v1/creations/update-creation/:id', () => {
  it('updates creation details', async () => {
    expect.assertions(3)
    vi.mocked(db.updateCreationById).mockResolvedValue(1)
    vi.mocked(db.createCreationGlazes).mockResolvedValue([1])
    vi.mocked(db.getCreationById).mockResolvedValue(mockNewCreation)
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockNewGlazesResult)


    const res = await request(server).patch('/api/v1/creations/update-creation/2').send(mockFormCreation)
    
    expect(res.body).toStrictEqual(mockNewCreationResult)
    expect(res.statusCode).toBe(200)
    expect(db.updateCreationById).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.updateCreationById).mockRejectedValue(new Error('Route error'))
    const res = await request(server).patch('/api/v1/creations/update-creation/2').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// PATCH /:id
describe('PATCH /api/v1/creations/update-creation-status/:id', () => {
  it('updates the status of a creation', async () => {
    expect.assertions(3)
    vi.mocked(db.updateCreationStatusById).mockResolvedValue(1)
    vi.mocked(db.getCreationById).mockResolvedValue(mockNewCreation)
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockNewGlazesResult)


    const res = await request(server).patch('/api/v1/creations/update-creation-status/2').send(mockFormCreation)
    
    expect(res.body).toStrictEqual(mockNewCreationResult)
    expect(res.statusCode).toBe(200)
    expect(db.updateCreationStatusById).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.createCreation).mockRejectedValue(new Error('Route error'))
    const res = await request(server).patch('/api/v1/creations/update-creation-status/2').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE
describe('DELETE /api/v1/creations/:id', () => {
  it('deletes a specific creation', async () => {
    const mockDeleted = 1

    expect.assertions(4)
    vi.mocked(db.deleteCreationGlazes).mockResolvedValue(mockDeleted)
    vi.mocked(db.deleteCreation).mockResolvedValue(mockDeleted)

    const res = await request(server).delete('/api/v1/creations/2')

    expect(db.deleteCreationGlazes).toHaveBeenCalledOnce()
    expect(db.deleteCreation).toHaveBeenCalledOnce()
    expect(res.body).toStrictEqual({
      deleted: `${mockDeleted} item(s) have been deleted successfully`,
    })
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.deleteCreationGlazes).mockRejectedValue(new Error('Route error'))

    const res = await request(server).delete('/api/v1/creations/99999').send(mockFormCreation)
    expect(res.statusCode).toBe(500)
  })
})