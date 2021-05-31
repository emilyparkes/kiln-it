const initialState = null

export default function all (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ALL':
      return action.all
    default:
      return state
  }
}
