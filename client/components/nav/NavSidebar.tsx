import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
interface Props {
  open: boolean
  toggleDrawer: (open: boolean) => void
}

function NavSidebar({ open, toggleDrawer }: Props) {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250, backgroundColor: '#744F44', height: '100%' }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          >
        <List>
          <ListItem key={'Home'} disablePadding>
            <Link to="/" className="link" >
              <ListItemText primary={'Home'} />
            </Link>
          </ListItem>
          <ListItem key={'Gallery'} disablePadding>
            <Link to="/gallery" className="link" >
              <ListItemText primary={'Gallery'} />
            </Link>
          </ListItem>
          <ListItem key={'About'} disablePadding>
            <Link to="/about" className="link" >
              <ListItemText primary={'About'} />
            </Link>
          </ListItem>
          <ListItem key={'Edit'} disablePadding>
            <Link
              to="/creations/le-vase/edit"
              className="link"
              
            >
              <ListItemText primary={'Edit'} />
            </Link>
          </ListItem>
          <ListItem key={'New'} disablePadding>
            <Link to="/creations/new" className="link" >
              <ListItemText primary={'New'} />
            </Link>
          </ListItem>
          <ListItem key={'Log'} disablePadding>
            <Link to="/log" className="link" >
              <ListItemText primary={'Log'} />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key={'Options'} disablePadding>
            <Link to="/options/edit" className="link" >
              <ListItemText primary={'Options'} />
            </Link>
          </ListItem>
          <ListItem key={'Sign In'} disablePadding>
            <Link to="/signin" className="link" >
              <ListItemText primary={'Sign In'} />
            </Link>
          </ListItem>
          <ListItem key={'Register'} disablePadding>
            <Link to="/register" className="link" >
              <ListItemText primary={'Register'} />
            </Link>
          </ListItem>
        </List>
        </div>
      </Box>
    </Drawer>
  )
}

export default NavSidebar
