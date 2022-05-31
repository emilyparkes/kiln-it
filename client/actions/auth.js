export const SIGN_IN_USER = 'SIGN_IN_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'

export function signInUser (user) {
  return {
    type: SIGN_IN_USER,
    user
  }
}

export function logOutUser () {
  return {
    type: LOG_OUT_USER
  }
}
