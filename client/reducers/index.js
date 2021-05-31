import { combineReducers } from 'redux'

import all from './all'
import error from './error'
import waitIndicator from './waitIndicator'
import creations from './creations'

export default combineReducers({
  all,
  error,
  waitIndicator,
  creations
})
