import { Action, SET_FOCUS } from '../actions/navutils-focus'

export interface Utils {
  filter: boolean,
  search: boolean
}

const initialState: Utils = {
  filter: true,
  search: false
}

export default function navUtils (state = initialState, action: Action) {
  switch (action.type) {
    case SET_FOCUS:
      return action.payload
    default:
      return state
  }
}
