import type { ThunkAction } from '../store'
import { Clay } from '../../models/Clay'

import { showError } from './error'
import { getClay, addClay, updateClay, deleteClay } from '../apis/clay'

export const CLAY_REQUEST_PENDING = 'CLAY_REQUEST_PENDING'
export const RECEIVE_CLAY = 'RECEIVE_CLAY'
export const ADD_NEW_CLAY = 'ADD_NEW_CLAY'
export const UPDATE_CLAY = 'UPDATE_CLAY'
export const REMOVE_CLAY = 'REMOVE_CLAY'

export type Action =
| { type: typeof CLAY_REQUEST_PENDING; payload: null }
| { type: typeof RECEIVE_CLAY; payload: Clay }
| { type: typeof ADD_NEW_CLAY; payload: Clay }
| { type: typeof UPDATE_CLAY; payload: Clay }
| { type: typeof REMOVE_CLAY; payload: number }

export function requestClayPending (): Action {
  return {
    type: CLAY_REQUEST_PENDING,
    payload: null
  }
}

export function receiveClaySuccess (clay:Clay): Action {
  return {
    type: RECEIVE_CLAY,
    payload: clay
  }
}

export function newClaySuccess (clay:Clay): Action {
  return {
    type: ADD_NEW_CLAY,
    payload: clay
  }
}

export function updateClaySuccess (clay:Clay): Action {
  return {
    type: UPDATE_CLAY,
    payload: clay
  }
}

export function removeClaySuccess (id:number): Action {
  return {
    type: REMOVE_CLAY,
    payload: id
  }
}

export function fetchClay (): ThunkAction {
  return dispatch => {
    dispatch(requestClayPending())

    getClay()
      .then(clay => dispatch(receiveClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createClay (clay:Clay): ThunkAction {
  return dispatch => {
    dispatch(requestClayPending())

    addClay(clay)
      .then(clay => dispatch(newClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyClay (clay:Clay): ThunkAction {
  return dispatch => {
    dispatch(requestClayPending())

    updateClay(clay)
      .then((clay) => dispatch(updateClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeClay (id:number): ThunkAction {
  return dispatch => {
    dispatch(requestClayPending())

    deleteClay(id)
      .then(() => dispatch(removeClaySuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
