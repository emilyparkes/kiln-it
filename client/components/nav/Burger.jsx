import React, { useState } from 'react'
import LeftNav from './LeftNav'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='styled-burger'
        open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </div>
      <LeftNav open={open}/>
    </>
  )
}
export default Burger
