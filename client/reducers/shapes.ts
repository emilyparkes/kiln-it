import { Action, RECEIVE_SHAPES, ADD_NEW_SHAPES, UPDATE_SHAPE, REMOVE_SHAPE } from '../actions/shapes'

const initialState = null
export default function shapes (state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE_SHAPES:
      return action.payload
    case ADD_NEW_SHAPES:
      return state ? [...state, ...action.payload] : action.payload
    case UPDATE_SHAPE:
      return state.map(shape => shape.id === action.payload.id ? action.payload : shape)
    case REMOVE_SHAPE:
      return state.filter(shape => shape.id !== action.id)
    default:
      return state
  }
}
