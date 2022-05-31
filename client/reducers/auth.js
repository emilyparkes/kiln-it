import { SIGN_IN_USER, LOG_OUT_USER } from '../actions/auth'

const initialState = null

export default function auth (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return action.signedIn

    case LOG_OUT_USER:
      return null

    default:
      return state
  }
}
