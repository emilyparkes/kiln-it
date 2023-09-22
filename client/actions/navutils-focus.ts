import { Utils } from '../reducers/navutils-focus'
export const SET_FOCUS = 'SET_FOCUS'

export type Action = { type: typeof SET_FOCUS; payload: Utils }

export function setFocus (active: Utils) {
  return {
    type: SET_FOCUS,
    payload: active
  }
}
