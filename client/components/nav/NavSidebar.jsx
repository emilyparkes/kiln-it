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
        <ListItem key={'New'} disablePadding>
          <Link to="/creations/new" className="link" onClick={setOpen}>
            <ListItemText primary={'New'} />
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

// import React from 'react'
// import { Link } from 'react-router-dom'

// import {
//   Box,
//   Drawer,
//   Button,
//   List,
//   Divider,
//   ListItem,
//   ListItemButton,
//   // ListItemIcon,
//   ListItemText,
// } from '@mui/material'

// import { toLowHyphen } from '../../client-utils'

// export default function NavSidebar({ open, setOpen }) {
//   const toggleDrawer = (open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return
//     }

//     setOpen(open)
//   }

//   return (
//     <>
//       <Drawer
//         anchor={'left'}
//         open={open}
//         onClose={toggleDrawer(false)}
//         sx={{ width: '50%', backgroundColor: '#744F44'}}
//         // onOpen={toggleDrawer(true)}
//       >
//         <Box
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <ListItem>
//             <nav
//               className={
//                 open
//                   ? 'styled-burger line line-light line-open'
//                   : 'styled-burger line line-dark line-closed'
//               }
//               onClick={() => setOpen(!open)}
//             >
//               <div />
//               <div />
//               <div />
//             </nav>
//           </ListItem>
//           <List>
//             {[' ', 'Home', 'Gallery', 'About'].map((text) => {
//               let linkname = toLowHyphen(text)
//               return (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <Link
//                       to={`/${linkname}`}
//                       className="link"
//                       onClick={toggleDrawer(true)}
//                     >
//                       <ListItemText primary={text} />
//                     </Link>
//                   </ListItemButton>
//                 </ListItem>
//               )
//             })}
//           </List>
//           <Divider />
//           <List>
//             {['Edit', 'New', 'Log', 'Options', 'Sign In', 'Register'].map(
//               (text) => {
//                 let linkname = toLowHyphen(text)
//                 return (
//                   <ListItem key={text} disablePadding>
//                     <ListItemButton>
//                       <Link
//                         to={`/${linkname}`}
//                         className="link"
//                         onClick={toggleDrawer(true)}
//                       >
//                         <ListItemText primary={text} />
//                       </Link>
//                     </ListItemButton>
//                   </ListItem>
//                 )
//               }
//             )}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   )
// }
