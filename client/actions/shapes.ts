import { showError } from './error'
import { fetchShapes, postShapes, patchShape, delShape } from '../apis/shapes'
import { ThunkAction } from '../store'
import { Shape, DBShape } from '../../models/Shape'

export const SHAPES_REQUEST_PENDING = 'SHAPES_REQUEST_PENDING'
export const RECEIVE_SHAPES = 'RECEIVE_SHAPES'
export const ADD_NEW_SHAPES = 'ADD_NEW_SHAPES'
export const UPDATE_SHAPE = 'UPDATE_SHAPE'
export const REMOVE_SHAPE = 'REMOVE_SHAPE'

export type Action =
| { type: typeof SHAPES_REQUEST_PENDING; payload: null }
| { type: typeof RECEIVE_SHAPES; payload: Shape[] }
| { type: typeof ADD_NEW_SHAPES; payload: Shape[] }
| { type: typeof UPDATE_SHAPE; payload: Shape }
| { type: typeof REMOVE_SHAPE; payload: number }

export function requestShapesPending (): Action {
  return {
    type: SHAPES_REQUEST_PENDING,
    payload: null
  }
}

export function receiveShapes (shapes: Shape[]): Action {
  return {
    type: RECEIVE_SHAPES,
    payload: shapes
  }
}

export function newShapesSuccess (shapes: Shape[]): Action {
  return {
    type: ADD_NEW_SHAPES,
    payload: shapes
  }
}

export function updateShapeSuccess (shape: Shape): Action {
  return {
    type: UPDATE_SHAPE,
    payload: shape
  }
}

export function removeShapeSuccess (id: number): Action {
  return {
    type: REMOVE_SHAPE,
    payload: id
  }
}

export function getShapes (): ThunkAction {
  return (dispatch) => {
    dispatch(requestShapesPending())

  return fetchShapes()
      .then(shapes => dispatch(receiveShapes(shapes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function createShapes (shapes: Shape[]): ThunkAction {
  return (dispatch) => {
    dispatch(requestShapesPending())

  return postShapes(shapes)
      .then(shapes => dispatch(newShapesSuccess(shapes)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function modifyShape (shape: DBShape): ThunkAction {
  return (dispatch) => {
    dispatch(requestShapesPending())

  return patchShape(shape.id, shape)
      .then((shape) => dispatch(updateShapeSuccess(shape)))
      .catch(err => dispatch(showError(err.message)))
  }
}

export function removeShape (id: number): ThunkAction {
  return (dispatch) => {
    dispatch(requestShapesPending())

  return delShape(id)
      .then(() => dispatch(removeShapeSuccess(id)))
      .catch(err => dispatch(showError(err.message)))
  }
}
