import React, { useState } from 'react'

import FilterBar from './FilterBar'
import SearchBar from './SearchBar'

function NavUtils (props) {
  const [filterFocus, setFilterFocus] = useState(true)
  const [searchFocus, setSearchFocus] = useState(false)

  const toggleFocus = (event) => {
    event.preventDefault()
    setFilterFocus(!filterFocus)
    setSearchFocus(!searchFocus)
  }

  return (
    <div className='utils-container'>
      <FilterBar focus={filterFocus} toggleFocus={toggleFocus}/>
      <SearchBar focus={searchFocus} toggleFocus={toggleFocus}/>
    </div>
  )
}

export default NavUtils
