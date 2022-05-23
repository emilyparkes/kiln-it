import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar ({ focus, toggleFocus }) {
  return (
    <div className='search'>
      <input type='text' className={focus ? 'focused' : undefined} placeholder='Search'/>
      <button onClick={toggleFocus} id='search-button'
        className={focus ? 'active' : undefined}><HiOutlineSearch/></button>
    </div>
  )
}

export default SearchBar
