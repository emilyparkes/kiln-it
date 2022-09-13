import { RECEIVE_CREATIONS, UPDATE_CREATION } from '../actions/creations'
const initialState = null

export default function creations(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CREATIONS:
      return action.creations
    case UPDATE_CREATION:
      return state.map(creation => creation.id == action.creation.id ? action.creation : creation)
    default:
      return state
  }
}
