import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/glazes'

import { mockGlazes, mockModifiedGlaze, mockModifiedGlazeResult, mockNewGlazes, mockNewGlazesResult } from './mocks/glazes-mocks'
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

vi.mock('../db/glazes')

beforeEach(() => {
  vi.resetAllMocks()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

// GET
describe('GET /api/v1/glazes', async () => {
  it('returns the correct number of glazes', async () => {
    expect.assertions(5)
    vi.mocked(db.getGlazes).mockResolvedValue(mockGlazes)
    
    const res = await request(server).get('/api/v1/glazes')
      expect(res.body).toHaveLength(3)
      expect(db.getGlazes).toHaveBeenCalledOnce()
      expect(res.body[0].id).toEqual(1)
      expect(res.body[0].glaze).toEqual('Clear')
      expect(200)
  })
  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getGlazes).mockRejectedValue(new Error('Route error'))

    const res = await request(server).get('/api/v1/glazes')
    expect(res.statusCode).toBe(500)
  })
})

// TODO: Think this route should change to being when a new glaze option is created - for now test as is
// POST
describe('POST /api/v1/glazes', () => {
  it('adds a new glaze to the database', async () => {
    expect.assertions(2)
    vi.mocked(db.addGlaze).mockResolvedValue([1])

    const res = await request(server).post('/api/v1/glazes').send(mockNewGlazes)

    expect(res.body).toStrictEqual(mockNewGlazesResult)
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.addGlaze).mockRejectedValue(new Error('Route error'))
    const res = await request(server).post('/api/v1/glazes').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// PATCH /:id
describe('PATCH /api/v1/glazes/:id', () => {
  it('updates glaze details', async () => {
    expect.assertions(3)
    vi.mocked(db.updateGlaze).mockResolvedValue(1)
    vi.mocked(db.getGlazeById).mockResolvedValue(mockModifiedGlazeResult)


    const res = await request(server).patch('/api/v1/glazes/2').send(mockModifiedGlaze)
    
    expect(res.body).toStrictEqual(mockModifiedGlazeResult)
    expect(res.statusCode).toBe(200)
    expect(db.updateGlaze).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.updateGlaze).mockRejectedValue(new Error('Route error'))
    const res = await request(server).patch('/api/v1/glazes/2').send(mockModifiedGlaze)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE
describe('DELETE /api/v1/glazes/:id', () => {
  it('deletes a specific glaze', async () => {
    const mockDeleted = 1

    expect.assertions(3)
    vi.mocked(db.deleteGlaze).mockResolvedValue(mockDeleted)

    const res = await request(server).delete('/api/v1/glazes/2')
    expect(db.deleteGlaze).toHaveBeenCalledOnce()
    expect(res.body).toStrictEqual({
      deleted: `${mockDeleted} item(s) have been deleted successfully`,
    })
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.deleteGlaze).mockRejectedValue(new Error('Route error'))

    const res = await request(server).delete('/api/v1/glazes/99999').send(mockFormCreation)
    expect(res.statusCode).toBe(500)
  })
})