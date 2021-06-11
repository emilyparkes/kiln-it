import { showError } from './error'
import { getGlazes, addGlazes, updateGlaze, deleteGlaze } from '../apis/glazes'

export const GLAZES_REQUEST_PENDING = 'GLAZES_REQUEST_PENDING'
export const RECEIVE_GLAZES = 'RECEIVE_GLAZES'
export const ADD_NEW_GLAZES = 'ADD_NEW_GLAZES'
export const UPDATE_GLAZE = 'UPDATE_GLAZE'
export const REMOVE_GLAZE = 'REMOVE_GLAZE'

export function requestGlazesPending () {
  return {
    type: GLAZES_REQUEST_PENDING
  }
}

export function receiveGlazesSuccess (glazes) {
  return {
    type: RECEIVE_GLAZES,
    glazes
  }
}

export function newGlazesSuccess (glazes) {
  return {
    type: ADD_NEW_GLAZES,
    glazes
  }
}

export function updateGlazeSuccess (glaze) {
  return {
    type: UPDATE_GLAZE,
    glaze
  }
}

export function removeGlazeSuccess (id) {
  return {
    type: REMOVE_GLAZE,
    id
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

export function createGlazes (glazes) {
  return dispatch => {
    dispatch(requestGlazesPending())

    addGlazes(glazes)
      .then(glazes => dispatch(newGlazesSuccess(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyGlaze (glaze) {
  return dispatch => {
    dispatch(requestGlazesPending())

    updateGlaze(glaze)
      .then((glaze) => dispatch(updateGlazeSuccess(glaze)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeGlaze (id) {
  return dispatch => {
    dispatch(requestGlazesPending())

    deleteGlaze(id)
      .then(() => dispatch(removeGlazeSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
