import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCreations } from '../actions/creations'
import { fetchClay } from '../actions/clay'
import { fetchGlazes } from '../actions/glazes'
import { fetchShapes } from '../actions/shapes'
import { fetchStatuses } from '../actions/statuses'

import Navigation from './nav/Navigation'
import Home from './Home'
import Gallery from './Gallery'
import CreationEdit from './CreationEdit'
import Creation from './Creation'
import Register from './auth/Register'
import SignIn from './auth/SignIn'
import Log from './StatusLog'
import DataOptionsView from './DataOptionsView'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(fetchCreations())
    dispatch(fetchClay())
    dispatch(fetchGlazes())
    dispatch(fetchShapes())
    dispatch(fetchStatuses())
  }, [])

  return (
    <>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/log' component={Log} />
        <Route path='/creations/:name/edit' component={CreationEdit} />
        <Route path='/creations/:name' component={Creation} />
        <Route path='/options/edit' component={DataOptionsView} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </>
  )
}

export default connect()(App)
