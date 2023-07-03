import { Action, SET_SEARCHTERM, CLEAR_SEARCH } from '../actions/search'

const initialState = null

export default function filter (state = initialState, action: Action) {
  switch (action.type) {
    case SET_SEARCHTERM:
      return action.payload
    case CLEAR_SEARCH:
      return initialState
    default:
      return state
  }
}