import React from 'react'
import { Link } from 'react-router-dom'

import { getUser } from '../../apis/firebase/auth'
import LogOut from '../auth/LogOut'

function LeftNav ({ sidebarOpen, setSidebar }) {
  const user = getUser

  return (
    <div className={sidebarOpen ? 'leftnav slide-open' : 'leftnav slide-closed'}>

      <Link to='/' className='link' onClick={setSidebar}>
        <li>Home</li>
      </Link>

      <Link to='/gallery' className='link' onClick={setSidebar}>
        <li>Gallery</li>
      </Link>

      <Link to='/about' className='link' onClick={setSidebar}>
        <li>About</li>
      </Link>

      {user() &&
         <div><Link to='/creations/le-vase/edit' className='link' onClick={setSidebar}>
           <li>Edit</li>
         </Link>

         <Link to='/log' className='link' onClick={setSidebar}>
           <li>Log</li>
         </Link>

         <Link to='/options/edit' className='link' onClick={setSidebar}>
           <li>Options</li>
         </Link>

         <LogOut className='link' setSidebar={setSidebar}/>
         </div>

        //   <Link to='/signin' className='link' onClick={setSidebar}>
        //     <li>Sign In</li>
        //   </Link>
        //   <Link to='/register' className='link' onClick={setSidebar}>
        //     <li>Register</li>
        //   </Link>
        // </div>
      }

    </div>
  )
}

export default LeftNav
