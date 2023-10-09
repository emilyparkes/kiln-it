import { combineReducers } from 'redux'

import auth from './auth'
import all from './all'
import error from './error'
import navUtils from './navutils-focus'
import waitIndicator from './waitIndicator'
import clay from './clay'
import creations from './creations'
import glazes from './glazes'
import shapes from './shapes'
import statuses from './statuses'
import filter from './filter'
import search from './search'

export default combineReducers({
  auth,
  all,
  navUtils,
  error,
  waitIndicator,
  filter,
  search,
  creations,
  clay,
  glazes,
  shapes,
  statuses,
 
})
