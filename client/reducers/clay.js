const initialState = null

export default function clay (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_CLAY':
      return action.clay
    default:
      return state
  }
}
