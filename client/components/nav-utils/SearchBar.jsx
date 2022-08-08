import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { HiOutlineSearch } from 'react-icons/hi'
import _ from 'lodash'

import { setSearchTerm } from '../../actions/search'

function SearchBar({ focus, toggleFocus }) {
  const [searchterm, setSearch] = useState(null)
  const dispatch = useDispatch()
  
  const debouncedSearch = useRef( // react remembers debounce between renders
    _.debounce((searchterm) => dispatch(setSearchTerm(searchterm)), 400) // delay call of dispatch 300ms
  ).current

  useEffect(() => {
    debouncedSearch(searchterm)
    return () => { // calls to cancel running when not on this page 
      debouncedSearch.cancel()
    }
  }, [searchterm])


  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="search">
      <form>
        <input
          onChange={onChange}
          value={searchterm || ''}
          type="text"
          className={focus ? 'focused' : undefined}
          placeholder="Search"
        />
        <button
          onClick={toggleFocus}
          id="search-button"
          className={focus ? 'active' : undefined}
        >
          <HiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar

// elastic search
// https://www.elastic.co/?ultron=B-Stack-Trials-APJ-ANZ-Exact&gambit=Stack-Core&blade=adwords-s&hulk=paid&Device=c&thor=elastisearch
