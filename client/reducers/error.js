const initialState = null

export default function error (state = initialState, action) {
  switch (action.type) {
    case 'THROW_ERROR':
      return action.message
    case 'CLEAR_ERROR':
      return null
    default:
      return state
  }
}
