import React from 'react'
import { Link } from 'react-router-dom'

import { LinkText, Navbar } from './Navbar'

export default function Nav (props) {
  let navLinks = null

  switch (props.location.pathname) {
    case '/':
      navLinks = (
        <>
          <LinkText>
            <Link to='/signin'>Sign in</Link>
          </LinkText>
          <LinkText>
            <Link to='/register'>Register</Link>
          </LinkText>
        </>
      )
      break
    case '/signin':
      navLinks = (
        <>
          <LinkText>
            <Link to='/register'>Register</Link>
          </LinkText>
          <LinkText>
            <Link to='/'>Home</Link>
          </LinkText>
        </>
      )
      break
    case '/register':
      navLinks = (
        <>
          <LinkText>
            <Link to='/signin'>Sign in</Link>
          </LinkText>
          <LinkText>
            <Link to='/'>Home</Link>
          </LinkText>
        </>
      )
      break
    default:
      navLinks = (
        <>
          <LinkText>
            <Link to='/signin'>Sign in</Link>
          </LinkText>
          <LinkText>
            <Link to='/register'>Register</Link>
          </LinkText>
          <LinkText>
            <Link to='/'>Home</Link>
          </LinkText>
        </>
      )
  }
  return (
    <>
      <Navbar navLinks={navLinks} />
    </>
  )
}
