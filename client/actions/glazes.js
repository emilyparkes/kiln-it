import { showError } from './error'
import { getGlazes } from '../apis/glazes'

const GET_GLAZES_PENDING = 'GET_GLAZES_PENDING'
const RECEIVE_GLAZES = 'RECEIVE_GLAZES'

export function getGlazesPending () {
  return {
    type: GET_GLAZES_PENDING
  }
}

export function receiveGlazes (glazes) {
  return {
    type: RECEIVE_GLAZES,
    glazes
  }
}

export function fetchGlazes () {
  return dispatch => {
    dispatch(getGlazesPending())

    getGlazes()
      .then(glazes => dispatch(receiveGlazes(glazes)))
      .catch(err => dispatch(showError(err.message)))
  }
}
