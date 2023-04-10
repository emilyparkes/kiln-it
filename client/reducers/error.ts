import { Action, SHOW_ERROR, CLEAR_ERROR } from '../actions/error'

const initialState = ''

export default function error (state = initialState, action: Action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.payload
    case CLEAR_ERROR:
      return null
    default:
      return state
  }
}
