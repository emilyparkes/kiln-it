import { showError } from './error'
import { getAll } from '../apis/all'

const GET_ALL_PENDING = 'GET_ALL_PENDING'
const RECEIVE_ALL = 'RECEIVE_ALL'

export function getAllPending () {
  return {
    type: GET_ALL_PENDING
  }
}

export function receiveAll (all) {
  return {
    type: RECEIVE_ALL,
    all
  }
}

export function fetchAll () {
  return dispatch => {
    dispatch(getAllPending())

    getAll()
      .then(all => dispatch(receiveAll(all)))
      .catch(err => dispatch(showError(err.message)))
  }
}
