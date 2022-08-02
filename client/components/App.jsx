import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCreations } from '../actions/creations'
import { fetchClay } from '../actions/clay'
import { fetchGlazes } from '../actions/glazes'
import { fetchShapes } from '../actions/shapes'
import { fetchStatuses } from '../actions/statuses'

import Navigation from './nav/Navigation'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import CreationEdit from './CreationEdit'
import Creation from './Creation'
import Register from './auth/Register'
import SignIn from './auth/SignIn'
import Log from './StatusLog'
import DataOptionsView from './DataOptionsView'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCreations())
    dispatch(fetchClay())
    dispatch(fetchGlazes())
    dispatch(fetchShapes())
    dispatch(fetchStatuses())
  }, [])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/log' element={<Log/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/creations/:name/edit' element={<CreationEdit/>} />
        <Route path='/creations/:name' element={<Creation/>} />
        <Route path='/options/edit' element={<DataOptionsView/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
