/* eslint-disable jest/no-commented-out-tests */
import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/glazes'
import { mockGlazes, mockGlazes, mockNewCreationId, mockFormCreation, mockNewCreation, mockNewCreationResult, mockNewGlazesResult } from './mocks/glazes-mocks'

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

// This will clear mock history and reset its implementation to an empty function
beforeEach(() => {
  vi.resetAllMocks()
})

// Keeps an eye on the console and stops it from logging when we run our tests
// Initially had it in the error tests (where they are commented out), but seems to work perfectly fine outside of the functions
// If the first test has the spyOn then none of the errors log, if the second has, then the first logs etc
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

// POST
describe('POST /api/v1/glazes', () => {
  it('adds a new creation to the database', async () => {
    expect.assertions(3)
    vi.mocked(db.addGlaze).mockResolvedValue(mockNewCreationId)
    vi.mocked(db.createCreationGlazes).mockResolvedValue([1])
    vi.mocked(db.getCreationById).mockResolvedValue(mockNewCreation)
    vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockNewGlazesResult)


    const res = await request(server).post('/api/v1/glazes').send(mockFormCreation)
    expect(res.body).toStrictEqual(mockNewCreationResult)
    expect(res.statusCode).toBe(200)
    expect(db.createCreation).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.createCreation).mockRejectedValue(new Error('Route error'))
    const res = await request(server).post('/api/v1/glazes').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// // PATCH /:id
// describe('PATCH /api/v1/glazes/update-creation/:id', () => {
//   it('updates creation details', async () => {
//     expect.assertions(3)
//     vi.mocked(db.updateCreationById).mockResolvedValue(1)
//     vi.mocked(db.createCreationGlazes).mockResolvedValue([1])
//     vi.mocked(db.getCreationById).mockResolvedValue(mockNewCreation)
//     vi.mocked(db.getGlazesByCreationId).mockResolvedValue(mockNewGlazesResult)


//     const res = await request(server).patch('/api/v1/glazes/update-creation/2').send(mockFormCreation)
//     expect(res.body).toStrictEqual(mockNewCreationResult)
//     expect(res.statusCode).toBe(200)
//     expect(db.updateCreationById).toHaveBeenCalledOnce()
//   })

//   it('responds with a 500 if fails', async () => {
//     vi.mocked(db.updateCreationById).mockRejectedValue(new Error('Route error'))
//     const res = await request(server).patch('/api/v1/glazes/update-creation/2').send(mockFormCreation)

//     expect(res.statusCode).toBe(500)
//   })
// })

// // PATCH /:id
// describe('PATCH /api/v1/glazes/update-creation-status/:id', () => {
//   it('updates the status of a creation', async () => {
//     expect.assertions(3)
//     vi.mocked(db.updateglazestatusById).mockResolvedValue(1)

//     const res = await request(server).patch('/api/v1/glazes/update-creation-status/2').send(mockFormCreation)
//     expect(res.body).toStrictEqual(1)
//     expect(res.statusCode).toBe(200)
//     expect(db.updateglazestatusById).toHaveBeenCalledOnce()
//   })

//   it('responds with a 500 if fails', async () => {
//     vi.mocked(db.createCreation).mockRejectedValue(new Error('Route error'))
//     const res = await request(server).patch('/api/v1/glazes/update-creation-status/2').send(mockFormCreation)

//     expect(res.statusCode).toBe(500)
//   })
// })

// // DELETE
// describe('DELETE /api/v1/glazes/:id', () => {
//   it('deletes a specific creation', async () => {
//     const mockDeleted = 1

//     expect.assertions(4)
//     vi.mocked(db.deleteCreationGlazes).mockResolvedValue(mockDeleted)
//     vi.mocked(db.deleteCreation).mockResolvedValue(mockDeleted)

//     const res = await request(server).delete('/api/v1/glazes/2')
//     // perhaps run the get route and check to see if isnt there anymore
//     // similar to db test
//     expect(db.deleteCreationGlazes).toHaveBeenCalledOnce()
//     expect(db.deleteCreation).toHaveBeenCalledOnce()
//     expect(res.body).toStrictEqual({
//       deleted: `${mockDeleted} item(s) have been deleted successfully`,
//     })
//     expect(res.statusCode).toBe(200)
//   })

//   it('responds with a 500 if fails', async () => {
//     vi.mocked(db.deleteCreationGlazes).mockRejectedValue(new Error('Route error'))

//     const res = await request(server).delete('/api/v1/glazes/99999').send(mockFormCreation)
//     expect(res.statusCode).toBe(500)
//   })
// })