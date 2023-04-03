import { SET_FOCUS } from '../actions/navutils-focus'

const initialState = {
  filter: true,
  search: false
}

export default function navUtils (state = initialState, action) {
  switch (action.type) {
    case SET_FOCUS:
      return action.focus
    default:
      return state
  }
}
