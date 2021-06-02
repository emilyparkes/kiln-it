const initialState = null

export default function shapes (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_SHAPES':
      return action.shapes
    default:
      return state
  }
}
