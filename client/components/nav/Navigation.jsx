import React from 'react'
import Burger from './Burger'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '../theme/Palette'

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

export default function Navigation (props) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ElevationScroll {...props}>
        <AppBar position='fixed'>
          <Toolbar>
          <div className='nav'>
            <Burger />
              <div className='logo'>
                Dirty Hands Studio
              </div>
          </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      </ThemeProvider>
    </>
  )
}

