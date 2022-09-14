import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'

function NavSidebar({ open, setOpen }) {
  return (
    <div
      className={open ? 'leftnav nav-slide-open' : 'leftnav nav-slide-closed'}
    >
      <List>
        <ListItem key={'Home'} disablePadding>
          <Link to="/" className="link" onClick={setOpen}>
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem>
        <ListItem key={'Gallery'} disablePadding>
          <Link to="/gallery" className="link" onClick={setOpen}>
            <ListItemText primary={'Gallery'} />
          </Link>
        </ListItem>
        <ListItem key={'About'} disablePadding>
          <Link to="/about" className="link" onClick={setOpen}>
            <ListItemText primary={'About'} />
          </Link>
        </ListItem>
        <ListItem key={'Edit'} disablePadding>
          <Link to="/creations/le-vase/edit" className="link" onClick={setOpen}>
            <ListItemText primary={'Edit'} />
          </Link>
        </ListItem>
        <ListItem key={'Log'} disablePadding>
          <Link to="/log" className="link" onClick={setOpen}>
            <ListItemText primary={'Log'} />
          </Link>
        </ListItem>
        <ListItem key={'Options'} disablePadding>
          <Link to="/options/edit" className="link" onClick={setOpen}>
            <ListItemText primary={'Options'} />
          </Link>
        </ListItem>
        <ListItem key={'Sign In'} disablePadding>
          <Link to="/signin" className="link" onClick={setOpen}>
            <ListItemText primary={'Sign In'} />
          </Link>
        </ListItem>
        <ListItem key={'Register'} disablePadding>
          <Link to="/register" className="link" onClick={setOpen}>
            <ListItemText primary={'Register'} />
          </Link>
        </ListItem>
      </List>
    </div>
  )
}

export default NavSidebar
