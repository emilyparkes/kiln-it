import type { ThunkAction } from '../store'
import { Creation } from '../../models/Creation'

import { showError } from './error'
import {
  fetchCreations,
  postCreation,
  patchCreationStatus,
  patchCreation,
  deleteCreation,
} from '../apis/creations'

export const CREATIONS_REQUEST_PENDING = 'CREATIONS_REQUEST_PENDING'
export const RECEIVE_CREATIONS = 'RECEIVE_CREATIONS'
export const ADD_NEW_CREATION = 'ADD_NEW_CREATION'
export const UPDATE_CREATION = 'UPDATE_CREATION'
export const REMOVE_CREATION = 'REMOVE_CREATION'

export type Action =
| { type: typeof CREATIONS_REQUEST_PENDING; payload: null }
| { type: typeof RECEIVE_CREATIONS; payload: Creation[] }
| { type: typeof ADD_NEW_CREATION; payload: Creation }
| { type: typeof UPDATE_CREATION; payload: Creation }
| { type: typeof REMOVE_CREATION; payload: number }

export function requestCreationsPending(): Action {
  return {
    type: CREATIONS_REQUEST_PENDING,
    payload: null
  }
}

export function newCreationSuccess(creation:Creation): Action {
  return {
    type: ADD_NEW_CREATION,
    payload: creation
  }
}

export function receiveCreationsSuccess(creations:Creation[]): Action {
  return {
    type: RECEIVE_CREATIONS,
    payload: creations
  }
}

export function updateCreationSuccess(creation:Creation): Action {
  return {
    type: UPDATE_CREATION,
    payload: creation
  }
}

export function removeCreationSuccess(id:number): Action {
  return {
    type: REMOVE_CREATION,
    payload: id
  }
}

export function getCreations(): ThunkAction {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    return fetchCreations()
      .then((creations) => dispatch(receiveCreationsSuccess(creations)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function createCreation(newCreation: Creation): ThunkAction {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    return postCreation(newCreation)
      .then((creation) => dispatch(newCreationSuccess(creation)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function updateCreationStatus(creation: Creation): ThunkAction {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    return patchCreationStatus(creation)
      .then((creation) => dispatch(updateCreationSuccess(creation)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function updateCreation(creation: Creation): ThunkAction {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    return patchCreation(creation)
      .then((creation) => dispatch(updateCreationSuccess(creation)))
      .catch((err) => dispatch(showError(err.message)))
  }
}

export function removeCreation(id:number): ThunkAction {
  return (dispatch) => {
    dispatch(requestCreationsPending())

    return deleteCreation(id)
      .then(() => dispatch(removeCreationSuccess(id)))
      .catch((err) => dispatch(showError(err.message)))
  }
}
