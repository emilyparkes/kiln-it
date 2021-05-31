const initialState = false

export default function waitIndicator (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PENDING':
      return true
    case 'RECEIVE_ALL':
      return false
    default:
      return state
  }
}
