import { combineReducers } from 'redux'

import auth from './auth'
import all from './all'
import error from './error'
import waitIndicator from './waitIndicator'
import clay from './clay'
import creations from './creations'
import glazes from './glazes'
import shapes from './shapes'
import statuses from './statuses'
import filter from './filter'

export default combineReducers({
  auth,
  all,
  error,
  waitIndicator,
  clay,
  creations,
  glazes,
  shapes,
  statuses,
  filter
})
