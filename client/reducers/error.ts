import { Action } from '../actions/error'

const initialState = ''

export default function error (state = initialState, action: Action) {
  switch (action.type) {
    case 'THROW_ERROR':
      return action.payload.message
    case 'CLEAR_ERROR':
      return null
    default:
      return state
  }
}
