export const SET_SEARCHTERM = 'SET_SEARCHTERM'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export function setSearchTerm (searchterm) {
  return {
    type: SET_SEARCHTERM,
    searchterm
  }
}

export function clearSearch () {
  return {
    type: CLEAR_SEARCH,
  }
}
