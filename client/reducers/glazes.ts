import { Action, RECEIVE_GLAZES, ADD_NEW_GLAZES, UPDATE_GLAZE, REMOVE_GLAZE } from '../actions/glazes'

const initialState = null
export default function glazes (state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE_GLAZES:
      return action.payload
    case ADD_NEW_GLAZES:
      return state ? [...state, ...action.payload] : action.payload
    case UPDATE_GLAZE:
      return state.map(glaze => glaze.id === action.payload.id ? action.payload : glaze)
    case REMOVE_GLAZE:
      return state.filter(glaze => glaze.id !== action.payload.id)
    default:
      return state
  }
}
