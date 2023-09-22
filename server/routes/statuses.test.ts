import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import server from '../server'
import * as db from '../db/statuses'

import { mockStatuses, mockNewStatus, mockNewStatusResult, mockModifiedStatus, mockModifiedStatusResult} from './mocks/statuses-mocks'
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

vi.mock('../db/statuses')

beforeEach(() => {
  vi.resetAllMocks()
})

vi.spyOn(console, 'error').mockImplementation(() => {})

// GET
describe('GET /api/v1/statuses', async () => {
  it('returns the correct number of statuses', async () => {
    expect.assertions(5)
    vi.mocked(db.getStatuses).mockResolvedValue(mockStatuses)
    
    const res = await request(server).get('/api/v1/statuses')

    expect(res.body).toHaveLength(3)
    expect(db.getStatuses).toHaveBeenCalledOnce()
    expect(res.body[0].id).toEqual(1)
    expect(res.body[0].status).toEqual('Wet')
    expect(200)
  })

  it('responds with a 500 error if fails', async () => {
    vi.mocked(db.getStatuses).mockRejectedValue(new Error('Route error'))

    const res = await request(server).get('/api/v1/statuses')

    expect(res.statusCode).toBe(500)
  })
})

// TODO: Think this route should change to being when a new glaze option is created - for now test as is
// POST
describe('POST /api/v1/statuses', () => {
  it('adds a new status to the database', async () => {
    expect.assertions(2)
    vi.mocked(db.addStatus).mockResolvedValue([4])

    const res = await request(server).post('/api/v1/statuses').send(mockNewStatus)

    expect(res.body).toStrictEqual(mockNewStatusResult)
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.addStatus).mockRejectedValue(new Error('Route error'))

    const res = await request(server).post('/api/v1/statuses').send(mockFormCreation)

    expect(res.statusCode).toBe(500)
  })
})

// PATCH /:id
describe('PATCH /api/v1/statuses/:id', () => {
  it('updates status details', async () => {
    expect.assertions(3)
    vi.mocked(db.updateStatus).mockResolvedValue(1)
    vi.mocked(db.getStatusById).mockResolvedValue(mockModifiedStatusResult)


    const res = await request(server).patch('/api/v1/statuses/4').send(mockModifiedStatus)
    
    expect(res.body).toStrictEqual(mockModifiedStatusResult)
    expect(res.statusCode).toBe(200)
    expect(db.updateStatus).toHaveBeenCalledOnce()
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.updateStatus).mockRejectedValue(new Error('Route error'))

    const res = await request(server).patch('/api/v1/statuses/4').send(mockModifiedStatus)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE
describe('DELETE /api/v1/statuses/:id', () => {
  it('deletes a specific status', async () => {
    const mockDeleted = 1

    expect.assertions(3)
    vi.mocked(db.deleteStatus).mockResolvedValue(mockDeleted)

    const res = await request(server).delete('/api/v1/statuses/2')
    expect(db.deleteStatus).toHaveBeenCalledOnce()
    expect(res.body).toStrictEqual({
      deleted: `${mockDeleted} item(s) have been deleted successfully`,
    })
    expect(res.statusCode).toBe(200)
  })

  it('responds with a 500 if fails', async () => {
    vi.mocked(db.deleteStatus).mockRejectedValue(new Error('Route error'))

    const res = await request(server).delete('/api/v1/statuses/99999').send(mockFormCreation)
    expect(res.statusCode).toBe(500)
  })
})