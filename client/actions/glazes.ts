import { showError } from './error'
import { fetchGlazes, postGlazes, patchGlaze, delGlaze } from '../apis/glazes'
import { Glaze } from '../../models/Glaze'
import { ThunkAction } from '../store'

export const GLAZES_REQUEST_PENDING = 'GLAZES_REQUEST_PENDING'
export const RECEIVE_GLAZES = 'RECEIVE_GLAZES'
export const ADD_NEW_GLAZES = 'ADD_NEW_GLAZES'
export const UPDATE_GLAZE = 'UPDATE_GLAZE'
export const REMOVE_GLAZE = 'REMOVE_GLAZE'

export type Action =
| { type: typeof GLAZES_REQUEST_PENDING; payload: null }
| { type: typeof RECEIVE_GLAZES; payload: Glaze[] }
| { type: typeof ADD_NEW_GLAZES; payload: Glaze[] }
| { type: typeof UPDATE_GLAZE; payload: Glaze }
| { type: typeof REMOVE_GLAZE; payload: null }


export function requestGlazesPending (): Action {
  return {
    type: GLAZES_REQUEST_PENDING,
    payload: null
  }
}

export function receiveGlazesSuccess (glazes: Glaze[]): Action {
  return {
    type: RECEIVE_GLAZES,
    payload: glazes
  }
}

export function newGlazesSuccess (glazes: Glaze[]): Action {
  return {
    type: ADD_NEW_GLAZES,
    payload: glazes
  }
}

export function patchGlazeSuccess (glaze: Glaze) {
  return {
    type: UPDATE_GLAZE,
    payload: glaze
  }
}

export function removeGlazeSuccess (id: number) {
  return {
    type: REMOVE_GLAZE,
    payload: id
  }
}

export function getGlazes (): ThunkAction {
  return (dispatch) => {
    dispatch(requestGlazesPending())

    return fetchGlazes()
      .then(glazes => dispatch(receiveGlazesSuccess(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createGlazes (glazes: Glaze[]): ThunkAction {
  return (dispatch) => {
    dispatch(requestGlazesPending())

    return postGlazes(glazes)
      .then(glazes => dispatch(newGlazesSuccess(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyGlaze (glaze: Glaze): ThunkAction {
  return (dispatch) => {
    dispatch(requestGlazesPending())

    return patchGlaze(glaze.id, glaze)
      .then((glaze) => dispatch(patchGlazeSuccess(glaze)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeGlaze (id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestGlazesPending())

    return delGlaze(id)
      .then(() => dispatch(removeGlazeSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
