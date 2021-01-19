import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 26px 12px 0px 12px;
    font-family: 'Alegreya Sans', sans-serif;
    color: #744F44;
    font-size: 1rem;
    display: block;
    text-decoration: none;
    flex: 0 0 auto;
    border-radius: 50%;
    justify-content: left
  }
  a:hover {
    color: #b98462;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #744F44;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-300px)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #e3c6a4;
    }
    li:hover {
        color: #b98462;
      }
  }
`

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to='/'><li>Home</li></Link>
      <Link to='/gallery'><li>Gallery</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/sign-in'><li>Sign In</li></Link>
      <Link to='/register'><li>Register</li></Link>
    </Ul>
  )
}

export default LeftNav
