import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
// import { ThemeProvider } from '@mui/material/styles'
// import { theme } from '../styles/theme'

import { fetchCreations } from '../actions/creations'
import { fetchClay } from '../actions/clay'
import { fetchGlazes } from '../actions/glazes'
import { fetchShapes } from '../actions/shapes'
import { fetchStatuses } from '../actions/statuses'

import Navigation from './nav/Navigation'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import NewCreation from './NewCreation'
import CreationEdit from './CreationEdit'
import Creation from './Creation'
import Register from './auth/Register'
import SignIn from './auth/SignIn'
import Log from './StatusLog'
import DataOptionsView from './DataOptionsView'
import PageNotFound from './PageNotFound'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCreations())
    dispatch(fetchClay())
    dispatch(fetchGlazes())
    dispatch(fetchShapes())
    dispatch(fetchStatuses())
  }, [])

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/log" element={<Log />} />
        <Route path="/about" element={<About />} />
        <Route path="/creations/new" element={<NewCreation />} />
        <Route path="/creations/:name/edit" element={<CreationEdit />} />
        <Route path="/creations/:name" element={<Creation />} />
        <Route path="/options/edit" element={<DataOptionsView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
