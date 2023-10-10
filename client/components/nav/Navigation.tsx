import { useState, ReactElement, cloneElement, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
  styled,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider } from '@mui/material/styles'
import { AccountCircle } from '@mui/icons-material'

import { theme } from '../../styles/theme'
import NavSidebar from './NavSidebar'
import NavUtils from '../nav-utils/NavUtils'
import { init as initUser, signOut, FirebaseUser } from '../../../firebase/auth'

interface Props {
  children: ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default function Navigation(props: object) {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    initUser(
      (user) => setUser(user),
      () => setUser(null)
    )
  }, [])

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

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const renderNavUtils = () => {
    const { pathname } = location
    if (pathname == '/gallery' || pathname == '/log') {
      return <NavUtils />
    } else return null
  }

  const renderSignInOrUser = () => {
    const { pathname } = location
    if (!user){
      if (pathname == '/gallery' || pathname == '/about') {
        return (
          <Link to="/signin">
            <Button color="inherit" sx={{padding: '0'}}>Login</Button>
          </Link>
        )
      } else return null
    } else if (user && pathname !== '/') {
      return (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={signOut}>Log out</MenuItem>
          </Menu>
        </div>
      )
    } else return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <ElevationScroll {...props}>
            <AppBar position="fixed">
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
                {renderSignInOrUser()}
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
