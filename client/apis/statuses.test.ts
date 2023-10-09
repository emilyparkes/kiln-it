import nock from 'nock'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as api from './statuses'
import { mockResponse, newStatusResponse } from './mocks/statuses-mocks'

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

describe('fetchStatuses', () => {
  it('gets all the statuses items from the database', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/statuses')
      .reply(200, mockResponse)

    const res = await api.fetchStatuses()

    expect(res).toStrictEqual(mockResponse)
    expect(res).toHaveLength(3)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/statuses')
      .reply(500)

    const res = api.fetchStatuses()

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('postStatuses', () => {
  const newStatus = [{ status: "Awaiting Pick Up" }]

  it('adds a status to the database', async () => { 
    const scope = nock('http://localhost')
      .post('/api/v1/statuses')
      .reply(200, newStatusResponse)
    
    const res = await api.postStatuses(newStatus)

    expect(res).toStrictEqual(newStatusResponse)
    expect(scope.isDone()).toBeTruthy()
  })


  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
    .post('/api/v1/statuses')
    .reply(500)

    const res = api.postStatuses(newStatus)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 403 (Forbidden) error if duplicate status trying to be added')
})

describe('patchStatus', () => {
  const modifiedstatus = { status: "Awaiting Collection" }
  it('updates a status in the database', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/statuses/2')
      .reply(200)

    await api.patchStatus(2, modifiedstatus)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/statuses/2')
      .reply(500)

    const res = api.patchStatus(2, modifiedstatus)
    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 404 if the status doesnt exist', async () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/statuses/10')
      .reply(404)

    const res = api.patchStatus(10, modifiedstatus)
    const expected = new Error('Not Found')
    await expect(res).rejects.toStrictEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('delStatus', () => {
  it('removes a status from the database', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/statuses/2')
      .reply(200)

    await api.delStatus(2)

    expect(scope.isDone()).toBeTruthy()
  })

  it('responds with a 500 error if fails', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/statuses/2')
      .reply(500)

    const res = api.delStatus(2)

    const expected = new Error('Internal Server Error')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })

  // TODO
  it.todo('responds with a 404 if status doesnt exist', async () => {
    const scope = nock('http://localhost')
    .delete('/api/v1/statuses/10')
    .reply(404)

    const res = api.delStatus(10)
    const expected = new Error('Not Found')
    await expect(res).rejects.toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})
