import { combineReducers } from 'redux'

import all from './all'
import creations from './creations'

export default combineReducers({
  all,
  creations
})
