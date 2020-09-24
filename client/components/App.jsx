import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Register from './Register'
import SignIn from './SignIn'

export default function App () {
  return (
    <>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/signin' component={SignIn}/>
    </>
  )
}
