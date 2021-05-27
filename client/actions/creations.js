import { showError } from './error'
import { getCreations } from '../apis/creations'

const GET_CREATIONS_PENDING = 'GET_CREATIONS_PENDING'
const RECEIVE_CREATIONS = 'RECEIVE_CREATIONS'

export function getCreationsPending () {
  return {
    type: GET_CREATIONS_PENDING
  }
}

export function receiveCreations (creations) {
  return {
    type: RECEIVE_CREATIONS,
    creations
  }
}

export function fetchCreations () {
  return dispatch => {
    dispatch(getCreationsPending())

    getCreations()
      .then(creations => dispatch(receiveCreations(creations)))
      .catch(err => dispatch(showError(err.message)))
  }
}
