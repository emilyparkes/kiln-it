const initialState = null

export default function statuses (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_STATUSES':
      return action.statuses
    default:
      return state
  }
}
