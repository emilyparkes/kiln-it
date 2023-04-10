import { useState } from 'react'
import NavSidebar from './NavSidebar'

function Burger () {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button className={open ? 'styled-burger line line-light line-open' : 'styled-burger line line-dark line-closed'}
        onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </button>
      <NavSidebar open={open} setOpen={() => setOpen(!open)}/>
    </>
  )
}

export default Burger
