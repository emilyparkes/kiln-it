import { useState, ReactElement, cloneElement } from 'react'
import { useLocation } from 'react-router-dom'
import NavSidebar from './NavSidebar'

// import PropTypes from 'prop-types'

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
  styled,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../styles/theme'
import NavUtils from '../nav-utils/NavUtils'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// function App() {
//   return (
//     <React.Fragment>
//       <AppBar position="fixed">
//         <Toolbar>{/* content */}</Toolbar>
//       </AppBar>
//       <Offset />
//     </React.Fragment>
//   );
// }



export default function Navigation(props: object) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  const renderNavUtils = () => {
    const { pathname } = location
    console.log(pathname)
    if (pathname == '/gallery' || pathname == '/log' ) {
      return <NavUtils />
    } else return null
  }

  console.log('nav props', props)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar position="fixed">
            <Toolbar >
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
            {renderNavUtils()}




          </AppBar>

        </ElevationScroll>
        <Offset />

          <NavSidebar open={open} toggleDrawer={toggleDrawer} />
        </Box>
      </ThemeProvider>
    </>
  )
}
