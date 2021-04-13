import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './nav/Navigation'
import Home from './Home'
import Gallery from './Gallery'
import Creation from './Creation'
import Register from './auth/Register'
import SignIn from './auth/SignIn'
import Log from './StatusLog'

export default function App () {
  return (
    <>
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/log' component={Log} />
      <Route path='/creations/:shape/:id' component={Creation} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
    </>
  )
}
