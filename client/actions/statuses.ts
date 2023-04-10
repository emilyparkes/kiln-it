import { showError } from './error'
import { getStatuses, addStatuses, updateStatus, deleteStatus } from '../apis/statuses'
import { ThunkAction } from '../store'
import { Status } from '../../models/Status'

export const STATUSES_REQUEST_PENDING = 'STATUSES_REQUEST_PENDING'
export const RECEIVE_STATUSES = 'RECEIVE_STATUSES'
export const ADD_NEW_STATUSES = 'ADD_NEW_STATUSES'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const REMOVE_STATUS = 'REMOVE_STATUS'

export type Action =
| { type: typeof STATUSES_REQUEST_PENDING; payload: null }
| { type: typeof RECEIVE_STATUSES; payload: Status[] }
| { type: typeof ADD_NEW_STATUSES; payload: Status[] }
| { type: typeof UPDATE_STATUS; payload: Status }
| { type: typeof REMOVE_STATUS; payload: number }

export function requestStatusesPending (): Action {
  return {
    type: STATUSES_REQUEST_PENDING,
    payload: null
  }
}

export function receiveStatuses (statuses: Status[]): Action {
  return {
    type: RECEIVE_STATUSES,
    payload: statuses
  }
}

export function newStatusesSuccess (statuses: Status[]): Action {
  return {
    type: ADD_NEW_STATUSES,
    payload: statuses
  }
}

export function updateStatusSuccess (status: Status): Action {
  return {
    type: UPDATE_STATUS,
    payload: status
  }
}

export function removeStatusSuccess (id: number): Action {
  return {
    type: REMOVE_STATUS,
    payload: id
  }
}

export function fetchStatuses (): ThunkAction {
  return (dispatch) => {
    dispatch(requestStatusesPending())

    return getStatuses()
      .then(statuses => dispatch(receiveStatuses(statuses)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createStatuses (statuses: Status[]): ThunkAction {
  return (dispatch) => {
    dispatch(requestStatusesPending())

    return addStatuses(statuses)
      .then(statuses => dispatch(newStatusesSuccess(statuses)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyStatus (status: Status): ThunkAction {
  return (dispatch) => {
    dispatch(requestStatusesPending())

    return updateStatus(status.id, status)
      .then((status) => dispatch(updateStatusSuccess(status)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeStatus (id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestStatusesPending())

    return deleteStatus(id)
      .then(() => dispatch(removeStatusSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
