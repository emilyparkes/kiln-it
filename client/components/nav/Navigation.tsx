import { useState, ReactElement, cloneElement } from 'react'
import NavSidebar from './NavSidebar'

import PropTypes from 'prop-types'

import { Box, AppBar, Toolbar, IconButton, Typography, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../styles/theme'

interface Props {
  children: ReactElement
}

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}



export default function Navigation(props: object) {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  console.log('nav props', props)
  return (
    <>
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dirty Hands Studio
          </Typography>
        </Toolbar>
      </AppBar>

      <NavSidebar open={open} toggleDrawer={toggleDrawer}/>

    </Box>
    </ThemeProvider>

    </>
  )
}
