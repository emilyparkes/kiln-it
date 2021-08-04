export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function addFilter (category, value) {
  console.log(category, value)

  return {
    type: ADD_FILTER,
    category,
    value
  }
}

export function removeFilter (category, value) {
  return {
    type: REMOVE_FILTER,
    category,
    value
  }
}

export function clearFilter () {
  return {
    type: CLEAR_FILTER
  }
}
