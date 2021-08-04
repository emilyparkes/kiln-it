import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from '../actions/filter'

const initialState = {}

export default function filter (state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER:
      return addAdditionalFilter(state, action.category, action.value)
    case REMOVE_FILTER:
      return delFilter(state, action.category, action.value)
    case CLEAR_FILTER:
      return initialState
    default:
      return state
  }
}

function addAdditionalFilter (state, category, value) {
  return state[category]
    ? { ...state, [category]: [...state[category], value] }
    : { ...state, [category]: [value] }
}

function delFilter (state, category, value) {
  if (state[category]?.length > 1) {
    const filteredCategory = state[category].filter(val => val !== value)
    return { ...state, [category]: filteredCategory }
  } else {
    delete state[category]
    return { ...state }
  }
}
