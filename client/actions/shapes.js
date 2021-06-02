import { showError } from './error'
import { getShapes } from '../apis/shapes'

const GET_SHAPES_PENDING = 'GET_SHAPES_PENDING'
const RECEIVE_SHAPES = 'RECEIVE_SHAPES'

export function getShapesPending () {
  return {
    type: GET_SHAPES_PENDING
  }
}

export function receiveShapes (shapes) {
  return {
    type: RECEIVE_SHAPES,
    shapes
  }
}

export function fetchShapes () {
  return dispatch => {
    dispatch(getShapesPending())

    getShapes()
      .then(shapes => dispatch(receiveShapes(shapes)))
      .catch(err => dispatch(showError(err.message)))
  }
}
