import nock from 'nock'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as api from './glazes'
import { mockResponse, newGlazesResponse } from './mocks/glazes-mocks'

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

describe('fetchGlazes', () => {
  it('gets all the glazes items from the database', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/glazes')
      .reply(200, mockResponse)

    const res = await api.fetchGlazes()

    expect(res).toStrictEqual(mockResponse)
    expect(res).toHaveLength(3)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/glazes')
      .reply(500)

    const res = api.fetchGlazes()

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('postGlazes', () => {
  const newGlazes = [
    {
      glaze: "Clear"
    },
      {
      glaze: "Blue Pebble"
    }
  ]
  it('adds glazes to the database', async () => { 
    const scope = nock('http://localhost')
      .post('/api/v1/glazes')
      .reply(200, newGlazesResponse)
    
    const res = await api.postGlazes(newGlazes)

    expect(res).toStrictEqual(newGlazesResponse)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
    .post('/api/v1/glazes')
    .reply(500)

    const res = api.postGlazes(newGlazes)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 403 (Forbidden) error if duplicate glazes trying to be added')

})

describe('patchGlaze', () => {
  const modifiedglazes = { glaze: "Blue Pebble" }
  it('updates a glazes in the database', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/glazes/2')
      .reply(200)

    await api.patchGlaze(2, modifiedglazes)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/glazes/2')
      .reply(500)

    const res = api.patchGlaze(2, modifiedglazes)
    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 404 if the glazes doesnt exist', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/glazes/10')
      .reply(404)

    const res = api.patchGlaze(10, modifiedglazes)
    const expected = new Error('Not Found')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('delGlaze', () => {
  it('removes a glazes from the database', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/glazes/2')
      .reply(200)

    await api.delGlaze(2)

    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/glazes/2')
      .reply(500)

    const res = api.delGlaze(2)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 404 if glazes doesnt exist', async () => {
    const scope = nock('http://localhost')
    .delete('/api/v1/glazes/10')
    .reply(404)

    const res = api.delGlaze(10)
    const expected = new Error('Not Found')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})
