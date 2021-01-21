import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = ({ open }) => {
  return (
    <div className={open ? 'leftnav open' : 'leftnav closed'}>
      <Link to='/' className='link'><li>Home</li></Link>
      <Link to='/gallery' className='link'><li>Gallery</li></Link>
      <Link to='/about' className='link'><li>About</li></Link>
      <Link to='/sign-in' className='link'><li>Sign In</li></Link>
      <Link to='/register' className='link'><li>Register</li></Link>
    </div>
  )
}

export default LeftNav
