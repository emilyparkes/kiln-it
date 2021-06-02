const initialState = null

export default function glazes (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_GLAZES':
      return action.glazes
    default:
      return state
  }
}
