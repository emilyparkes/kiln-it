import { Action } from '../actions/index'
import { CLAY_REQUEST_PENDING, RECEIVE_CLAY, ADD_NEW_CLAY, UPDATE_CLAY, REMOVE_CLAY } from '../actions/clay'
import { CREATIONS_REQUEST_PENDING, RECEIVE_CREATIONS, ADD_NEW_CREATION, UPDATE_CREATION, REMOVE_CREATION } from '../actions/creations'
import { GLAZES_REQUEST_PENDING, RECEIVE_GLAZES, ADD_NEW_GLAZES, UPDATE_GLAZE, REMOVE_GLAZE } from '../actions/glazes'
import { SHAPES_REQUEST_PENDING, RECEIVE_SHAPES, ADD_NEW_SHAPES, UPDATE_SHAPE, REMOVE_SHAPE } from '../actions/shapes'
import { STATUSES_REQUEST_PENDING, RECEIVE_STATUSES, ADD_NEW_STATUSES, UPDATE_STATUS, REMOVE_STATUS } from '../actions/statuses'

const initialState: boolean = false

export default function waitIndicator (state = initialState, action: Action) {
  switch (action.type) {
    case CLAY_REQUEST_PENDING:
    case CREATIONS_REQUEST_PENDING:
    case GLAZES_REQUEST_PENDING:
    case SHAPES_REQUEST_PENDING:
    case STATUSES_REQUEST_PENDING:
      return true

    case ADD_NEW_CLAY:
    case RECEIVE_CLAY:
    case UPDATE_CLAY:
    case REMOVE_CLAY:
    case ADD_NEW_CREATION:
    case RECEIVE_CREATIONS:
    case UPDATE_CREATION:
    case REMOVE_CREATION:
    case ADD_NEW_GLAZES:
    case RECEIVE_GLAZES:
    case UPDATE_GLAZE:
    case REMOVE_GLAZE:
    case ADD_NEW_SHAPES:
    case RECEIVE_SHAPES:
    case UPDATE_SHAPE:
    case REMOVE_SHAPE:
    case ADD_NEW_STATUSES:
    case RECEIVE_STATUSES:
    case UPDATE_STATUS:
    case REMOVE_STATUS:
      return false

    default:
      return state
  }
}
