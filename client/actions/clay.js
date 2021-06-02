import { showError } from './error'
import { getClay } from '../apis/clay'

const GET_CLAY_PENDING = 'GET_CLAY_PENDING'
const RECEIVE_CLAY = 'RECEIVE_CLAY'

export function getClayPending () {
  return {
    type: GET_CLAY_PENDING
  }
}

export function receiveClay (clay) {
  return {
    type: RECEIVE_CLAY,
    clay
  }
}

export function fetchClay () {
  return dispatch => {
    dispatch(getClayPending())

    getClay()
      .then(clay => dispatch(receiveClay(clay)))
      .catch(err => dispatch(showError(err.message)))
  }
}
