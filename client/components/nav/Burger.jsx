import React, { useState } from 'react'
import LeftNav from './LeftNav'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={open ? 'styled-burger open' : 'styled-burger closed'}
        onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </div>
      <LeftNav open={open}/>
    </>
  )
}
export default Burger
