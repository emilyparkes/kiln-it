import { forwardRef, ReactEventHandler } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  open: boolean
  toggleDrawer: (open: boolean) => ReactEventHandler
}

interface ListItemLinkProps {
  primary: string
  to: string
}

export default function NavSidebar({ open, toggleDrawer }: Props) {

  const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
    itemProps,
    ref,
  ) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />
  })

  function ListItemLink(props: ListItemLinkProps) {
    const { primary, to } = props
  
    return (
      <li>
        <ListItem component={Link} to={to}>
          <ListItemText primary={primary} sx={{color:'#e3c6a4'}}/>
        </ListItem>
      </li>
    )
  }
  
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} >
      <Box sx={{ backgroundColor: '#744F44', color: '#e3c6a4', width: 250, height: '100%' }}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List aria-label="main pages">
          <IconButton
            size="large"
            aria-label="menu"
            sx={{ mr: 2, color: '#e3c6a4'}}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
              <ListItemLink to="/" primary="Home" />
              <ListItemLink to="/gallery" primary="Gallery" />  
              <ListItemLink to="/about" primary="About" />  
              <ListItemLink to="/creations/le-vase/edit" primary="Edit" />  
              <ListItemLink to="/creations/new" primary="New" />  
              <ListItemLink to="/log" primary="Log" />  
          </List>
          <Divider variant="middle" light={true} sx={{borderColor: '#e3c6a4'}}/>
          <List aria-label="secondary pages for admin">
              <ListItemLink to="/options/edit" primary="Options" />  
              <ListItemLink to="/signin" primary="Sign In" />  
              <ListItemLink to="/register" primary="Register" />  
          </List>
        </div>
      </Box>
    </Drawer>
  )
}
