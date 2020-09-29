const request = require('supertest')

const server = require('../server')
const statusDb = require('../db/statuses')

jest.mock('../db/statuses', () => ({
  getStatuses: jest.fn(),
  getStatusById: jest.fn()
}))

const mockStatuses = [
  { id: 1, status: 'Wet' },
  { id: 2, status: 'Leather Hard' },
  { id: 3, status: 'Bone Dry' },
  { id: 4, status: 'Bisque Firing' },
  { id: 5, status: 'Bisque Fired' },
  { id: 6, status: 'Glazed' },
  { id: 7, status: 'Glaze Firing' },
  { id: 8, status: 'Complete' }
]

const mockStatus = { id: 2, status: 'Leather Hard' }

describe('GET /api/v1/statuses', () => {
  it('returns an object with an array of statuses', () => {
    statusDb.getStatuses.mockImplementation(() => Promise.resolve(mockStatuses))

    return request(server)
      .get('/api/v1/statuses')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.statuses).toHaveLength(8)
        expect(res.body.statuses[0].status).toBe('Wet')
        expect(res.body.statuses[7].status).toMatch('Complete')
        return null
      })
  })
})

describe('GET /api/v1/statuses/:id', () => {
  it('returns a status', () => {
    statusDb.getStatusById.mockImplementation(() => Promise.resolve(mockStatus))

    return request(server)
      .get('/api/v1/statuses/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.id).toBe(2)
        expect(res.body.status).toBe('Leather Hard')
        return null
      })
  })

  it('returns a 404 if id is not found', () => {
    statusDb.getStatusById.mockImplementation(() => Promise.resolve(null))

    return request(server)
      .get('/api/v1/statuses/9999')
      .expect(404)
      .then(res => {
        expect(res.body.error).toMatch('status id not found')
        return res
      })
  })
})
