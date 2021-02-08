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
  it('returns an object with an array of statuses', async () => {
    statusDb.getStatuses.mockImplementation(() => Promise.resolve(mockStatuses))
    const { body } = await request(server)
      .get('/api/v1/statuses')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(body.statuses).toHaveLength(8)
    expect(body.statuses[0].status).toBe('Wet')
    expect(body.statuses[7].status).toMatch('Complete')
  })
})

describe('GET /api/v1/statuses/:id', () => {
  it('returns a status', async () => {
    statusDb.getStatusById.mockImplementation(() => Promise.resolve(mockStatus))

    const { body } = await request(server)
      .get('/api/v1/statuses/2')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(body.id).toBe(2)
    expect(body.status).toBe('Leather Hard')
  })

  it('returns a 404 if id is not found', async () => {
    statusDb.getStatusById.mockImplementation(() => Promise.resolve(null))
    const { body } = await request(server)
      .get('/api/v1/statuses/9999')
      .expect(404)

    expect(body.error).toMatch('status id not found')
  })
})
