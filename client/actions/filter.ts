export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export type Action =
| { type: typeof ADD_FILTER; payload: Payload }
| { type: typeof REMOVE_FILTER; payload: Payload }
| { type: typeof CLEAR_FILTER; payload: null }

interface Payload {
  category: string,
  value: string
}

export function addFilter (category: string, value: string): Action {
  return {
    type: ADD_FILTER,
    payload: { category, value }
  }
}

export function removeFilter (category: string, value: string): Action {
  return {
    type: REMOVE_FILTER,
    payload: { category, value }
  }
}

export function clearFilter (): Action {
  return {
    type: CLEAR_FILTER,
    payload: null
  }
}
