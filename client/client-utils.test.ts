import { describe, it, expect } from 'vitest'
import {
  findString,
  toCapSpace,
  toLowHyphen } from './client-utils'

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(false).toBeFalsy()
    expect(7).not.toBeNaN()
    expect(0.2 + 0.1).toBeCloseTo(0.3, 10)
    expect([1, 2, 3]).toBeDefined()
  })
})

describe('findString', () => {
  it('finds item based on arr, property and value', () => {
    const arr = [{ name: 'emily-coco', job: 'dev' }, { name: 'maryon-wils', job: 'audience' }]
    const property = 'name'
    const value = 'emily-coco'
    const expected = { name: 'emily-coco', job: 'dev' }
    const actual = findString(arr, property, value)
    expect(actual).toEqual(expected)
  })

  it('finds item based on arr, property, value and type', () => {
    const arr = [{ name: 'emily-coco', job: 'dev' }, { name: 'maryon-wils', job: 'audience' }]
    const property = 'name'
    const value = 'maryon-wils'
    const type = 'job'
    const expected = 'audience'
    const actual = findString(arr, property, value, type)
    expect(actual).toBe(expected)
  })
})

describe('toCapSpace', () => {
  it('makes a string uppercase and replaces hyphens with spaces', () => {
    const string = 'emily-coco'
    const expected = 'Emily Coco'
    const actual = toCapSpace(string)
    expect(actual).toBe(expected)
  })
})

describe('toLowHyphen', () => {
  it('makes a string lowercase replaces spaces with hyphens', () => {
    const string = 'Emily Coco'
    const expected = 'emily-coco'
    const actual = toLowHyphen(string)
    expect(actual).toBe(expected)
  })
})
