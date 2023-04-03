export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export type Action =
| { type: typeof SHOW_ERROR; payload: string }
| { type: typeof CLEAR_ERROR; payload: null }

export function showError (message: string): Action {
  return {
    type: SHOW_ERROR,
    payload: message
  }
}

export function clearError (): Action {
  return {
    type: CLEAR_ERROR,
    payload: null
  }
}
