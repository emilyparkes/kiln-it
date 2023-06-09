/* eslint-disable jest/no-commented-out-tests */
import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/creations'
import { mockCreations, mockCreation, mockGlazes } from './mocks'

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

// This will clear mock history and reset its implementation to an empty function
beforeEach(() => {
  vi.resetAllMocks()
})

// Keeps an eye on the console and stops it from logging when we run our tests
// Initially had it in the error tests (where they are commented out), but seems to work perfectly fine outside of the functions
// If the first test has the spyOn then none of the errors log, if the second has, then the first logs etc
vi.spyOn(console, 'error').mockImplementation(() => {})

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

  describe('GET /api/v1/creations/:id', async () => {
    it('returns the correct creation', async () => {
      expect.assertions(10)
      vi.mocked(db.getCreationById).mockResolvedValue(mockCreation)
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

  
  