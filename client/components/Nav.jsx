import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav (props) {
  let navLinks = null

  switch (props.location.pathname) {
    case '/':
      navLinks = (
        <>
          <Link to='/signin'>Sign in</Link>
          <Link to='/register'>Register</Link>
        </>
      )
      break
    case '/signin':
      navLinks = (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/'>Home</Link>
        </>
      )
      break
    case '/register':
      navLinks = (
        <>
          <Link to='/signin'>Sign in</Link>
          <Link to='/'>Home</Link>
        </>
      )
      break
    default:
      navLinks = (
        <>
          <Link to='/signin'>Sign in</Link>
          <Link to='/register'>Register</Link>
          <Link to='/'>Home</Link>
        </>
      )
  }
  return (
    <>
      <div className='nav'>
        <div>{navLinks}</div>
      </div>
    </>
  )
}
