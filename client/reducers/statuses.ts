import { Action, RECEIVE_STATUSES, ADD_NEW_STATUSES, UPDATE_STATUS, REMOVE_STATUS } from '../actions/statuses'

const initialState = null
export default function statuses (state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE_STATUSES:
      return action.payload
    case ADD_NEW_STATUSES:
      return state ? [...state, ...action.payload] : action.payload
    case UPDATE_STATUS:
      return state.map(status => status.id === action.payload.id ? action.payload : status)
    case REMOVE_STATUS:
      return state.filter(status => status.id !== action.payload.id)
    default:
      return state
  }
}
