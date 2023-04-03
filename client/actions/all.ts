import { fetchClay } from './clay'
import { fetchCreations } from './creations'
import { fetchGlazes } from './glazes'
import { fetchShapes } from './shapes'
import { fetchStatuses } from './statuses'

const GET_ALL_PENDING = 'GET_ALL_PENDING'
const RECEIVE_ALL = 'RECEIVE_ALL'

export function getAllPending () {
  return {
    type: GET_ALL_PENDING,
    payload: null
  }

}

export function receiveAll (all) {
  return {
    type: RECEIVE_ALL,
    payload: all
  }
}

export function fetchAll () {
  return dispatch => {
    dispatch(getAllPending())

    fetchClay()
    fetchCreations()
    fetchGlazes()
    fetchShapes()
    fetchStatuses()
  }
}
