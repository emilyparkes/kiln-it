const initialState = []

export default function creations (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_CREATIONS':
      return action.creations
    default:
      return state
  }
}
