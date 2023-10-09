import nock from 'nock'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as api from './creations'
import { mockResponse, newCreation, newCreationResponse, modifiedCreation } from './mocks/creations-mocks'

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

describe('fetchCreations', () => {
  it('gets all the creations items from the database', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/creations')
      .reply(200, mockResponse)

    const res = await api.fetchCreations()

    expect(res).toStrictEqual(mockResponse)
    expect(res).toHaveLength(2)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/creations')
      .reply(500)

    const res = api.fetchCreations()

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('postCreation', () => {
  it('adds a creation to the database', async () => { 
    const scope = nock('http://localhost')
      .post('/api/v1/creations/new-creation')
      .reply(200, newCreationResponse)
    
    const res = await api.postCreation(newCreation)

    expect(res).toStrictEqual(newCreationResponse)
    expect(scope.isDone()).toBeTruthy()
  })


  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
    .post('/api/v1/creations/new-creation')
    .reply(500)

    const res = api.postCreation(newCreation)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 403 (Forbidden) error if duplicate creations trying to be added')
})

describe('patchCreation', () => {
  it('updates a creations in the database', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/creations/update-creation/2')
      .reply(200, modifiedCreation)

    const res = await api.patchCreation(modifiedCreation)

    expect(res).toStrictEqual(modifiedCreation)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/creations/update-creation/2')
      .reply(500)

    const res = api.patchCreation(modifiedCreation)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it.todo('responds with a 404 if the creations doesnt exist', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/creations/update-creation/10')
      .reply(404)

    const res = api.patchCreation(modifiedCreation)

    const expected = new Error('Not Found')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('deleteCreation', () => {
  it('removes a creations from the database', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/creations/2')
      .reply(200)

    await api.deleteCreation(2)

    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/creations/2')
      .reply(500)

    const res = api.deleteCreation(2)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 404 if creations doesnt exist', async () => {
    const scope = nock('http://localhost')
    .delete('/api/v1/creations/10')
    .reply(404)

    const res = api.deleteCreation(10)
    const expected = new Error('Not Found')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})
