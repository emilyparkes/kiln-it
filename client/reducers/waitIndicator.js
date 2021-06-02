const initialState = false

export default function waitIndicator (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PENDING':
      return true
    case 'GET_CLAY_PENDING':
      return true
    case 'GET_CREATIONS_PENDING':
      return true
    case 'GET_GLAZES_PENDING':
      return true
    case 'GET_SHAPES_PENDING':
      return true
    case 'GET_STATUSES_PENDING':
      return true
    case 'RECEIVE_ALL':
      return false
    case 'RECEIVE_CLAY':
      return false
    case 'RECEIVE_CREATIONS':
      return false
    case 'RECEIVE_GLAZES':
      return false
    case 'RECEIVE_SHAPES':
      return false
    case 'RECEIVE_STATUSES':
      return false
    default:
      return state
  }
}
