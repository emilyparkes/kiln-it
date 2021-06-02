import { showError } from './error'
import { getStatuses } from '../apis/statuses'

const GET_STATUSES_PENDING = 'GET_STATUSES_PENDING'
const RECEIVE_STATUSES = 'RECEIVE_STATUSES'

export function getStatusesPending () {
  return {
    type: GET_STATUSES_PENDING
  }
}

export function receiveStatuses (statuses) {
  return {
    type: RECEIVE_STATUSES,
    statuses
  }
}

export function fetchStatuses () {
  return dispatch => {
    dispatch(getStatusesPending())

    getStatuses()
      .then(statuses => dispatch(receiveStatuses(statuses)))
      .catch(err => dispatch(showError(err.message)))
  }
}
