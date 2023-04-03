import { RECEIVE_SHAPES, ADD_NEW_SHAPES, UPDATE_SHAPE, REMOVE_SHAPE } from '../actions/shapes'

const initialState = null
export default function shapes (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SHAPES:
      return action.shapes
    case ADD_NEW_SHAPES:
      return state ? [...state, ...action.shapes] : action.shapes
    case UPDATE_SHAPE:
      return state.map(shape => shape.id === action.shape.id ? action.shape : shape)
    case REMOVE_SHAPE:
      return state.filter(shape => shape.id !== action.id)
    default:
      return state
  }
}
