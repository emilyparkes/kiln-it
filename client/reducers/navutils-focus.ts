import { Action, SET_FOCUS } from '../actions/navutils-focus'

interface navUtils {
  filter: boolean,
  search: boolean
}

const initialState: navUtils = {
  filter: true,
  search: false
}

export default function navUtils (state = initialState, action: Action) {
  switch (action.type) {
    case SET_FOCUS:
      return action.payload.focus
    default:
      return state
  }
}
