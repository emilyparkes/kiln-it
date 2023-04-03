import { showError } from './error'
import { getGlazes, addGlazes, updateGlaze, deleteGlaze } from '../apis/glazes'
import { Glaze } from '../../models/Glaze'

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

export function updateGlazeSuccess (glaze: Glaze) {
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

export function fetchGlazes () {
  return dispatch => {
    dispatch(requestGlazesPending())

    getGlazes()
      .then(glazes => dispatch(receiveGlazesSuccess(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createGlazes (glazes: Glaze[]) {
  return dispatch => {
    dispatch(requestGlazesPending())

    addGlazes(glazes)
      .then(glazes => dispatch(newGlazesSuccess(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyGlaze (glaze: Glaze) {
  return dispatch => {
    dispatch(requestGlazesPending())

    updateGlaze(glaze)
      .then((glaze) => dispatch(updateGlazeSuccess(glaze)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeGlaze (id: number) {
  return dispatch => {
    dispatch(requestGlazesPending())

    deleteGlaze(id)
      .then(() => dispatch(removeGlazeSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
