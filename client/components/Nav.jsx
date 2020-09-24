import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <>
      <Link to='/' >Home</Link>
      <Link to='/register' >Register</Link>
      <Link to='/signin' >Sign In</Link>
    </>
  )
}
