export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function showError (message) {
  return {
    type: SHOW_ERROR,
    message
  }
}

export function clearError () {
  return {
    type: CLEAR_ERROR
  }
}
