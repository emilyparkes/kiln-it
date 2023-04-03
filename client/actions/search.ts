export const SET_SEARCHTERM = 'SET_SEARCHTERM'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export type Action =
| { type: typeof SET_SEARCHTERM; payload: string }
| { type: typeof CLEAR_SEARCH; payload: null }

export function setSearchTerm (searchterm: string): Action {
  return {
    type: SET_SEARCHTERM,
    payload: searchterm
  }
}

export function clearSearch (): Action {
  return {
    type: CLEAR_SEARCH,
    payload: null
  }
}
