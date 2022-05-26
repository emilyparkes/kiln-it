import { SIGNIN_USER, LOG_OUT_USER } from '../actions/auth'

const initialState = null

export default function auth (state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return action.user

    case LOG_OUT_USER:
      return null

    default:
      return state
  }
}
