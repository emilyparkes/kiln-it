import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterBar from './FilterBar'
import SearchBar from './SearchBar'

import { setFocus } from '../../actions/navutils-focus'

function NavUtils () {

  const dispatch = useDispatch()
  const focus = useSelector(store => store.navUtils)

  const toggleFocus = (event) => {
    event.preventDefault()
    const filter = !focus.filter
    const search = !focus.search
    dispatch(setFocus({ filter, search }))
  }

  return (
    <>
      {focus && 
        <div className='utils-container'>
          <FilterBar focus={focus?.filter} toggleFocus={toggleFocus}/>
          <SearchBar focus={focus?.search} toggleFocus={toggleFocus}/>
        </div>
      }
    </>
  )
}

export default NavUtils
