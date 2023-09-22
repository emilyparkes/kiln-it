import nock from 'nock'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as api from './shapes'
import { mockResponse, newShapesResponse } from './mocks/shapes-mocks'

expect.extend(matchers)

afterEach(cleanup)

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(false).toBeFalsy()
    expect(7).not.toBeNaN()
    expect(0.2 + 0.1).toBeCloseTo(0.3, 10)
    expect([1, 2, 3]).toBeDefined()
  })
})

describe('fetchShapes', () => {
  it('gets all the shape items from the database', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/shapes')
      .reply(200, mockResponse)

    const res = await api.fetchShapes()

    expect(res).toStrictEqual(mockResponse)
    expect(res).toHaveLength(3)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/shapes')
      .reply(500)

    const res = api.fetchShapes()

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('postShapes', () => {
  const newShape = [
    {
      shape: "Espresso Mini Cup"
    }
  ]

  it('adds a shape to the database', async () => { 
    const scope = nock('http://localhost')
      .post('/api/v1/shapes')
      .reply(200, newShapesResponse)
    
    const res = await api.postShapes(newShape)

    expect(res).toStrictEqual(newShapesResponse)
    expect(scope.isDone()).toBeTruthy()
  })


  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
    .post('/api/v1/shapes')
    .reply(500)

    const res = api.postShapes(newShape)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 403 (Forbidden) error if duplicate shape trying to be added')
})

describe('patchShape', () => {
  const modifiedShape = { shape: "Blue Pebbles" }
  it('updates a shape in the database', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/shapes/2')
      .reply(200)

    await api.patchShape(2, modifiedShape)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/shapes/2')
      .reply(500)

    const res = api.patchShape(2, modifiedShape)
    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 404 if the shape doesnt exist', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/shapes/10')
      .reply(404)

    const res = api.patchShape(10, modifiedShape)
    const expected = new Error('Not Found')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('delShape', () => {
  it('removes a shape from the database', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/shapes/2')
      .reply(200)

    await api.delShape(2)

    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/shapes/2')
      .reply(500)

    const res = api.delShape(2)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 404 if shape doesnt exist', async () => {
    const scope = nock('http://localhost')
    .delete('/api/v1/shapes/10')
    .reply(404)

    const res = api.delShape(10)
    const expected = new Error('Not Found')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})
