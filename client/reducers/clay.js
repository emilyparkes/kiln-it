import { RECEIVE_CLAY, ADD_NEW_CLAY, UPDATE_CLAY, REMOVE_CLAY } from '../actions/clay'

const initialState = null
export default function clay (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CLAY:
      return action.clay
    case ADD_NEW_CLAY:
      return state ? [...state, ...action.clay] : action.clay
    case UPDATE_CLAY:
      return state.map(clay => clay.id === action.clay.id ? action.clay : clay)
    case REMOVE_CLAY:
      return state.filter(clay => clay.id !== action.id)
    default:
      return state
  }
}
