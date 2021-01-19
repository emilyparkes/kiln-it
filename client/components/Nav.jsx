import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, LinkText } from './Navbar'

export default function Nav (props) {
  let navLinks = null

  switch (props.location.pathname) {
    case '/':
      navLinks = (
        <>
          <LinkText>
            <Link to='/gallery'>gallery</Link>
          </LinkText>
          <LinkText>
            <Link to='/about'>about</Link>
          </LinkText>
          <LinkText>
            <Link to='/signin'>sign in</Link>
          </LinkText>
          <LinkText>
            <Link to='/register'>register</Link>
          </LinkText>
        </>
      )
      break
    case '/signin':
      navLinks = (
        <>
          <LinkText>
            <Link to='/gallery'>gallery</Link>
          </LinkText>
          <LinkText>
            <Link to='/about'>about</Link>
          </LinkText>
          <LinkText>
            <Link to='/register'>register</Link>
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
            <Link to='/gallery'>gallery</Link>
          </LinkText>
          <LinkText>
            <Link to='/about'>about</Link>
          </LinkText>
          <LinkText>
            <Link to='/signin'>sign in</Link>
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
            <Link to='/gallery'>gallery</Link>
          </LinkText>
          <LinkText>
            <Link to='/about'>about</Link>
          </LinkText>
          <LinkText>
            <Link to='/signin'>sign in</Link>
          </LinkText>
          <LinkText>
            <Link to='/register'>register</Link>
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
