import React, { useState } from 'react'
import LeftNav from './LeftNav'

function Burger () {
  const [sidebarOpen, setSidebar] = useState(false)

  return (
    <>
      <nav className={sidebarOpen ? 'styled-burger line line-light line-sidebar' : 'styled-burger line line-dark line-closed'}
        onClick={() => setSidebar(!sidebarOpen)}>
        <div/>
        <div/>
        <div/>
      </nav>
      <LeftNav sidebarOpen={sidebarOpen} setSidebar={() => setSidebar(!sidebarOpen)}/>
    </>
  )
}

export default Burger
