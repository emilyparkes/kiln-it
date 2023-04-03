import { RECEIVE_STATUSES, ADD_NEW_STATUSES, UPDATE_STATUS, REMOVE_STATUS } from '../actions/statuses'

const initialState = null
export default function statuses (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_STATUSES:
      return action.statuses
    case ADD_NEW_STATUSES:
      return state ? [...state, ...action.statuses] : action.statuses
    case UPDATE_STATUS:
      return state.map(status => status.id === action.status.id ? action.status : status)
    case REMOVE_STATUS:
      return state.filter(status => status.id !== action.id)
    default:
      return state
  }
}
