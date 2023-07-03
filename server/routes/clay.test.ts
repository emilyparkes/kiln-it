/* eslint-disable jest/no-commented-out-tests */
import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'

import * as db from '../db/clay'
import { getCreations, existsInCreations } from '../db/creations'

import { mockClay, mockNewClayResult, mockOneClay } from './mocks/clay-mocks'
import { mockCreations } from './mocks/creations-mocks'

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('Dirty Hands Studio').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

vi.mock('../db/clay')
vi.mock('../db/creations')
// This will clear mock history and reset its implementation to an empty function
beforeEach(() => {
  vi.resetAllMocks()
})

// Keeps an eye on the console and stops it from logging when we run our tests
// Initially had it in the error tests (where they are commented out), but seems to work perfectly fine outside of the functions
// If the first test has the spyOn then none of the errors log, if the second has, then the first logs etc
vi.spyOn(console, 'error').mockImplementation(() => {})

// GET
describe('GET /api/v1/clay', async () => {
  it('returns the correct number of clay', async () => {
    expect.assertions(5)
    vi.mocked(db.getClay).mockResolvedValue(mockClay)
    
    const res = await request(server).get('/api/v1/clay')
      expect(res.body).toHaveLength(3)
      expect(db.getClay).toHaveBeenCalledOnce()
      expect(res.body[0].id).toEqual(1)
      expect(res.body[0].clay).toEqual('White')
      expect(200)
  })
  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getClay).mockRejectedValue(new Error('Route error'))

    const res = await request(server).get('/api/v1/clay')
    expect(res.statusCode).toBe(500)
  })
})

// POST
describe('POST /api/v1/clay', () => {
  it('adds a new clay to the database', async () => {
    expect.assertions(3)
    vi.mocked(db.addClay).mockResolvedValue(4)

    const res = await request(server).post('/api/v1/clay').send(mockNewClayResult)
    expect(res.body).toStrictEqual(mockNewClayResult)
    expect(res.statusCode).toBe(200)
    expect(db.addClay).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.addClay).mockRejectedValue(new Error('Route error'))
    const res = await request(server).post('/api/v1/clay').send(mockNewClayResult)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE
describe('DELETE /api/v1/clay/:id', () => {
  it('deletes a specific creation', async () => {

    const mockDeleted = 1

    expect.assertions(4)
    vi.mocked(existsInCreations).mockResolvedValue(true)
    vi.mocked(getCreations).mockResolvedValue(mockCreations)
    vi.mocked(db.getClayById).mockResolvedValue(mockOneClay)
    vi.mocked(db.updateClay).mockResolvedValue(1)
    vi.mocked(db.deleteClay).mockResolvedValue(1)

    const res = await request(server).delete('/api/v1/clay/2')
    expect(db.getClayById).toHaveBeenCalledOnce()
    expect(res.body).toStrictEqual({
      deleted: `${mockDeleted} item(s) have been deleted successfully`,
    })
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.getClayById).mockRejectedValue(new Error('Route error'))

    const res = await request(server).delete('/api/v1/clay/99999').send(mockOneClay)
    expect(res.statusCode).toBe(500)
  })
})