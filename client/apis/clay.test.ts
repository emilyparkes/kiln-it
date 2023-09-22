import nock from 'nock'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as api from './clay'
import { mockResponse, newClayResponse } from './mocks/clay-mocks'

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

describe('fetchClay', () => {
  it('gets all the clay items from the database', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/clay')
      .reply(200, mockResponse)

    const res = await api.fetchClay()

    expect(res).toStrictEqual(mockResponse)
    expect(res).toHaveLength(3)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/clay')
      .reply(500)

    const res = api.fetchClay()

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('postClay', () => {
  const newClay = { clay: "Blue Pebble" }

  it('adds a clay to the database', async () => { 
    const scope = nock('http://localhost')
      .post('/api/v1/clay')
      .reply(200, newClayResponse)
    
    const res = await api.postClay(newClay)

    expect(res).toStrictEqual(newClayResponse)
    expect(scope.isDone()).toBeTruthy()
  })


  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
    .post('/api/v1/clay')
    .reply(500)

    const res = api.postClay(newClay)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it.todo('responds with a 403 (Forbidden) error if duplicate clay trying to be added')

})

describe('patchClay', () => {
  const modifiedClay = { clay: "Blue Pebbles" }
  it('updates a clay in the database', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/clay/2')
      .reply(200)

    await api.patchClay(2, modifiedClay)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/clay/2')
      .reply(500)

    const res = api.patchClay(2, modifiedClay)
    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 404 if the clay doesnt exist', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/clay/10')
      .reply(404)

    const res = api.patchClay(10, modifiedClay)
    const expected = new Error('Not Found')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('delClay', () => {
  it('removes a clay from the database', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/clay/2')
      .reply(200)

    await api.delClay(2)

    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/clay/2')
      .reply(500)

    const res = api.delClay(2)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 404 if clay doesnt exist', async () => {
    const scope = nock('http://localhost')
    .delete('/api/v1/clay/10')
    .reply(404)

    const res = api.delClay(10)
    const expected = new Error('Not Found')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})
