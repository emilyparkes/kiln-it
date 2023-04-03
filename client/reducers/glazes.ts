import { RECEIVE_GLAZES, ADD_NEW_GLAZES, UPDATE_GLAZE, REMOVE_GLAZE } from '../actions/glazes'

const initialState = null
export default function glazes (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GLAZES:
      return action.glazes
    case ADD_NEW_GLAZES:
      return state ? [...state, ...action.glazes] : action.glazes
    case UPDATE_GLAZE:
      return state.map(glaze => glaze.id === action.glaze.id ? action.glaze : glaze)
    case REMOVE_GLAZE:
      return state.filter(glaze => glaze.id !== action.id)
    default:
      return state
  }
}
