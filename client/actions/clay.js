import { showError } from './error'
import { getClay, addClay, updateClay, deleteClay } from '../apis/clay'

export const CLAY_REQUEST_PENDING = 'CLAY_REQUEST_PENDING'
export const RECEIVE_CLAY = 'RECEIVE_CLAY'
export const ADD_NEW_CLAY = 'ADD_NEW_CLAY'
export const UPDATE_CLAY = 'UPDATE_CLAY'
export const REMOVE_CLAY = 'REMOVE_CLAY'

export function requestClayPending () {
  return {
    type: CLAY_REQUEST_PENDING
  }
}

export function receiveClaySuccess (clay) {
  return {
    type: RECEIVE_CLAY,
    clay
  }
}

export function newClaySuccess (clay) {
  return {
    type: ADD_NEW_CLAY,
    clay
  }
}

export function updateClaySuccess (clay) {
  return {
    type: UPDATE_CLAY,
    clay
  }
}

export function removeClaySuccess (id) {
  return {
    type: REMOVE_CLAY,
    id
  }
}

export function fetchClay () {
  return dispatch => {
    dispatch(requestClayPending())

    getClay()
      .then(clay => dispatch(receiveClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createClay (clay) {
  return dispatch => {
    dispatch(requestClayPending())

    addClay(clay)
      .then(clay => dispatch(newClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyClay (clay) {
  return dispatch => {
    dispatch(requestClayPending())

    updateClay(clay)
      .then((clay) => dispatch(updateClaySuccess(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeClay (id) {
  return dispatch => {
    dispatch(requestClayPending())

    deleteClay(id)
      .then(() => dispatch(removeClaySuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
