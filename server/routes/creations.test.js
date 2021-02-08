const request = require('supertest')

const server = require('../server')
const creationDb = require('../db/creations')

jest.mock('../db/creations', () => ({
  getCreations: jest.fn(),
  getCreationById: jest.fn()
}))

const mockCreations = [
  {
    id: 1,
    clay: 1,
    shape: 2,
    status: 2,
    glaze: 4,
    weight_wet: 0,
    weight_leather_hard: 0,
    weight_bone_dry: 0,
    weight_bisque: 0,
    weight_complete: 0,
    date_created: '2020-06-15T13:45:30',
    date_complete: '2020-07-15T13:45:30',
    note: 'Glaze with criss-cross pattern'
  },
  {
    id: 2,
    clay: 2,
    shape: 2,
    status: 1,
    glaze: 4,
    weight_wet: 0,
    weight_leather_hard: 0,
    weight_bone_dry: 0,
    weight_bisque: 0,
    weight_complete: 0,
    date_created: '2020-05-24T14:45:30',
    date_complete: '2020-06-24T14:45:30',
    note: 'Glaze with criss-cross pattern'
  }
]

const mockCreation = {
  id: 2,
  clay: 2,
  shape: 2,
  status: 1,
  glaze: 4,
  weight_wet: 0,
  weight_leather_hard: 0,
  weight_bone_dry: 0,
  weight_bisque: 0,
  weight_complete: 0,
  date_created: '2020-05-24T14:45:30',
  date_complete: '2020-06-24T14:45:30',
  note: 'Glaze with criss-cross pattern'
}

describe('GET /api/v1/creations', () => {
  it('returns the correct number of creations', async () => {
    creationDb.getCreations.mockImplementation(() =>
      Promise.resolve(mockCreations)
    )
    const { body } = await request(server)
      .get('/api/v1/creations')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(body).toHaveLength(2)
  })

  describe('GET /api/v1/creations/:id', () => {
    it('returns the correct status', async () => {
      creationDb.getCreationById.mockImplementation(() =>
        Promise.resolve(mockCreation)
      )
      const { body } = await request(server)
        .get('/api/v1/creations/2')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(body.clay).toBe(2)
      expect(body.shape).toBe(2)
      expect(body.status).toBe(1)
      expect(body.glaze).toBe(4)
      expect(body.date_created).toBe('2020-05-24T14:45:30')
      expect(body.date_complete).toBe('2020-06-24T14:45:30')
      expect(body.note).toBe('Glaze with criss-cross pattern')
    })

    it('returns a 404 if id is not found', async () => {
      creationDb.getCreationById.mockImplementation(() => Promise.resolve(null))

      const { body } = await request(server)
        .get('/api/v1/creations/9999')
        .expect(404)

      expect(body.error).toMatch('creation id not found')
    })
  })
})
