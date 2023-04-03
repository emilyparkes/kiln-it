import { Action, RECEIVE_CREATIONS, UPDATE_CREATION, ADD_NEW_CREATION } from '../actions/creations'

const initialState = null

export default function creations(state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE_CREATIONS:
      return action.creations
    case UPDATE_CREATION:
      return state.map((creation) =>
        creation.id == action.creation.id ? action.creation : creation
      )
    case ADD_NEW_CREATION:
      return [...state, action.creation]
    default:
      return state
  }
}
