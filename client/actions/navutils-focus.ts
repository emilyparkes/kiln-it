export const SET_FOCUS = 'SET_FOCUS'

export type Action = { type: typeof SET_FOCUS; payload: string }

export function setFocus (focus: string) {
  return {
    type: SET_FOCUS,
    payload: focus
  }
}
