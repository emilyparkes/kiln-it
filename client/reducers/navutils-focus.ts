import { Action, SET_FOCUS } from '../actions/navutils-focus'

interface navUtils {
  filter: string,
  search: string
}

const initialState: navUtils = {
  filter: 'active',
  search: ''
}

export default function navUtils (state = initialState, action: Action) {
  switch (action.type) {
    case SET_FOCUS:
      return action.payload
    default:
      return state
  }
}
