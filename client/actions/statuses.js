import { showError } from './error'
import { getStatuses, addStatuses, updateStatus, deleteStatus } from '../apis/statuses'

export const STATUSES_REQUEST_PENDING = 'STATUSES_REQUEST_PENDING'
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES'
export const ADD_NEW_STATUSES = 'ADD_NEW_STATUSES'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const REMOVE_STATUS = 'REMOVE_STATUS'

export function requestStatusesPending () {
  return {
    type: STATUSES_REQUEST_PENDING
  }
}

export function receiveStatuses (statuses) {
  return {
    type: RECEIVE_STATUSES,
    statuses
  }
}

export function newStatusesSuccess (statuses) {
  return {
    type: ADD_NEW_STATUSES,
    statuses
  }
}

export function updateStatusSuccess (status) {
  return {
    type: UPDATE_STATUS,
    status
  }
}

export function removeStatusSuccess (id) {
  return {
    type: REMOVE_STATUS,
    id
  }
}

export function fetchStatuses () {
  return dispatch => {
    dispatch(requestStatusesPending())

    getStatuses()
      .then(statuses => dispatch(receiveStatuses(statuses)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createStatuses (statuses) {
  return dispatch => {
    dispatch(requestStatusesPending())

    addStatuses(statuses)
      .then(statuses => dispatch(newStatusesSuccess(statuses)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyStatus (status) {
  return dispatch => {
    dispatch(requestStatusesPending())

    updateStatus(status)
      .then((status) => dispatch(updateStatusSuccess(status)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeStatus (id) {
  return dispatch => {
    dispatch(requestStatusesPending())

    deleteStatus(id)
      .then(() => dispatch(removeStatusSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
