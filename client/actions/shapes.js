import { showError } from './error'
import { getShapes, addShapes, updateShape, deleteShape } from '../apis/shapes'

export const SHAPES_REQUEST_PENDING = 'SHAPES_REQUEST_PENDING'
export const RECEIVE_SHAPES = 'RECEIVE_SHAPES'
export const ADD_NEW_SHAPES = 'ADD_NEW_SHAPES'
export const UPDATE_SHAPE = 'UPDATE_SHAPE'
export const REMOVE_SHAPE = 'REMOVE_SHAPE'

export function requestShapesPending () {
  return {
    type: SHAPES_REQUEST_PENDING
  }
}

export function receiveShapes (shapes) {
  return {
    type: RECEIVE_SHAPES,
    shapes
  }
}

export function newShapesSuccess (shapes) {
  return {
    type: ADD_NEW_SHAPES,
    shapes
  }
}

export function updateShapeSuccess (shape) {
  return {
    type: UPDATE_SHAPE,
    shape
  }
}

export function removeShapeSuccess (id) {
  return {
    type: REMOVE_SHAPE,
    id
  }
}

export function fetchShapes () {
  return dispatch => {
    dispatch(requestShapesPending())

    getShapes()
      .then(shapes => dispatch(receiveShapes(shapes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createShapes (shapes) {
  return dispatch => {
    dispatch(requestShapesPending())

    addShapes(shapes)
      .then(shapes => dispatch(newShapesSuccess(shapes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyShape (shape) {
  return dispatch => {
    dispatch(requestShapesPending())

    updateShape(shape)
      .then((shape) => dispatch(updateShapeSuccess(shape)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeShape (id) {
  return dispatch => {
    dispatch(requestShapesPending())

    deleteShape(id)
      .then(() => dispatch(removeShapeSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
