export const SIGNIN_USER = 'SIGNIN_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'

export function signInUser (user) {
  return {
    type: SIGNIN_USER,
    user
  }
}

export function logOutUser () {
  return {
    type: LOG_OUT_USER
  }
}
