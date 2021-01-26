import React from 'react'
import Burger from './Burger'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <Burger />
      <div className='logo'>
        Dirty Hands Studio</div>
    </div>
  )
}

export default Navbar
