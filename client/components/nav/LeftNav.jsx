import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav ({ open, setOpen }) {
  return (
    <div className={open ? 'leftnav slide-open' : 'leftnav slide-closed'}>

      <Link to='/' className='link'onClick={setOpen}>
        <li>Home</li>
      </Link>

      <Link to='/gallery' className='link'onClick={setOpen}>
        <li>Gallery</li>
      </Link>

      <Link to='/creations/le-vase/edit' className='link'onClick={setOpen}>
        <li>Edit</li>
      </Link>

      <Link to='/log' className='link'onClick={setOpen}>
        <li>Log</li>
      </Link>

      <Link to='/about' className='link'onClick={setOpen}>
        <li>About</li>
      </Link>

      <Link to='/signin' className='link'onClick={setOpen}>
        <li>Sign In</li>
      </Link>

      <Link to='/register' className='link'onClick={setOpen}>
        <li>Register</li>
      </Link>
    </div>
  )
}
