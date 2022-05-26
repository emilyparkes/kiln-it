import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'

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
import LogOut from './auth/LogOut'
import Log from './StatusLog'
import DataOptionsView from './DataOptionsView'

import { signInUser, logOutUser } from '../actions/auth'
import auth from '../apis/firebase/auth'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(fetchCreations())
    dispatch(fetchClay())
    dispatch(fetchGlazes())
    dispatch(fetchShapes())
    dispatch(fetchStatuses())

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('USER SIGNED IN')
        dispatch(signInUser(user))
      } else {
        console.log('USER LOGGED OUT')
        dispatch(logOutUser())
      }
    })
  }, [])

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />

        <Route path='/log' element={<Log/>} />
        <Route path='/creations/:name/edit' element={<CreationEdit/>} />
        <Route path='/creations/:name' element={<Creation/>} />
        <Route path='/options/edit' element={<DataOptionsView/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/logout' element={<LogOut/>} />
      </Routes>
    </>
  )
}

export default connect()(App)
