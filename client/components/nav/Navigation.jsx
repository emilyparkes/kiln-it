import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding-top: 5px;
  display: flex;
  .logo {
    font-family: 'Alegreya Sans SC', sans-serif;
    flex: 0 0 auto;
    color: #744F44;
    padding: 12px 12px 0px 12px;
    margin-left: 10%;
    margin-right: auto;
    font-size: 2rem;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    justify-content: left
  }
  @media (max-width: 768px) {
    .logo {
      font-family: 'Alegreya Sans SC', sans-serif;
      flex: 0 0 auto;
      color: #744F44;
      padding: 12px 12px 0px 12px;
      margin-left: auto;
      margin-right: auto;
      font-size: 2rem;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 50%;
      justify-content: center
      }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
      <div className="logo">
        Dirty Hands Studio
      </div>
    </Nav>
  )
}

export default Navbar
