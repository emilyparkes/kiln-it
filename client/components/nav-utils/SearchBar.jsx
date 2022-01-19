import React, { useState } from 'react'

function SearchBar ({focus, toggleFocus}) {
  return (
      <div className='search'>
        <input type='text' className={focus ? 'focused' : undefined} placeholder='Search'/>
        <button onClick={toggleFocus} id='search-button' 
          className={focus ? 'active' : undefined}>🔍</button>
      </div>
  )
}

export default SearchBar
