import React, { useState } from 'react'
import NavSidebar from './NavSidebar'

function Burger () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={open ? 'styled-burger line line-light line-open' : 'styled-burger line line-dark line-closed'}
        onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </nav>
      <NavSidebar open={open} setOpen={() => setOpen(!open)}/>
    </>
  )
}

export default Burger
