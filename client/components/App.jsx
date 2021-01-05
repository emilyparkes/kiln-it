import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav.jsx'
import Home from './Home'
import Creation from './Creation'
import Register from './Register'
import SignIn from './SignIn'
import Log from './StatusLog'

export default function App () {
  return (
    <>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route path='/log' component={Log} />
      <Route path='/creations/:shape/:id' component={Creation} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
    </>
  )
}
