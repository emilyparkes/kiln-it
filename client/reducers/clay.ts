import { Action, RECEIVE_CLAY, ADD_NEW_CLAY, UPDATE_CLAY, REMOVE_CLAY } from '../actions/clay'
import { Clay } from '../../models/Clay'

const initialState: Clay[] = []

export default function clay (state = initialState, action: Action): Clay[] {
  switch (action.type) {
    case RECEIVE_CLAY:
      return action.payload
    case ADD_NEW_CLAY:
      return [...state, action.payload]
    case UPDATE_CLAY:
      return state.map(clay => clay.id === action.payload.id ? action.payload : clay)
    case REMOVE_CLAY:
      return state.filter(clay => clay.id !== action.payload.id)
    default:
      return state
  }
}
