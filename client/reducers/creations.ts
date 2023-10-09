import { Action, RECEIVE_CREATIONS, UPDATE_CREATION, ADD_NEW_CREATION } from '../actions/creations'
import { Creation } from '../../models/Creation'

type CreationArrayOrEmpty = Creation[] | []
const initialState:CreationArrayOrEmpty = []

export default function creations(state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE_CREATIONS:
      return action.payload
    case UPDATE_CREATION:
      return state.map((creation) =>
        creation.id == action.payload.id ? action.payload : creation
      )
    case ADD_NEW_CREATION:
      return [...state, action.payload]
    default:
      return state
  }
}
