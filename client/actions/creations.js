import { showError } from './error'
import {
  getCreations,
  postCreation,
  patchCreationStatus,
  patchCreation,
  deleteCreation,
} from '../apis/creations'

export const CREATIONS_REQUEST_PENDING = 'CREATIONS_REQUEST_PENDING'
export const RECEIVE_CREATIONS = 'RECEIVE_CREATIONS'
export const ADD_NEW_CREATIONS = 'ADD_NEW_CREATIONS'
export const UPDATE_CREATION = 'UPDATE_CREATION'
export const REMOVE_CREATION = 'REMOVE_CREATION'

export function requestCreationsPending() {
  return {
    type: CREATIONS_REQUEST_PENDING,
  }
}

export function newCreationsSuccess(creations) {
  return {
    type: ADD_NEW_CREATIONS,
    creations,
  }
}

export function receiveCreationsSuccess(creations) {
  return {
    type: RECEIVE_CREATIONS,
    creations,
  }
}

export function updateCreationSuccess(creation) {
  return {
    type: UPDATE_CREATION,
    creation,
  }
}

export function removeCreationSuccess(id) {
  return {
    type: REMOVE_CREATION,
    id,
  }
}

export function fetchCreations() {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    getCreations()
      .then((creations) => dispatch(receiveCreationsSuccess(creations)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function createCreation() {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    postCreation()
      .then((creations) => dispatch(newCreationsSuccess(creations)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function updateCreationStatus(creation) {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    patchCreationStatus(creation)
      .then((creation) => dispatch(updateCreationSuccess(creation)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function updateCreation(creation) {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    patchCreation(creation)
      .then((creation) => dispatch(updateCreationSuccess(creation)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function removeCreations(id) {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    deleteCreation(id)
      .then(() => dispatch(removeCreationSuccess(id)))
      .catch((err) => dispatch(showError(err.message)))
  }
}
