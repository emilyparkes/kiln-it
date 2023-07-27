import { useState, useEffect, useRef, ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks'
import { SearchRounded as SearchIcon } from '@mui/icons-material'
import _ from 'lodash'

import { setSearchTerm } from '../../actions/search'

interface Props {
  focus: string,
  toggleFocus: boolean
}

function SearchBar({ focus, toggleFocus }: Props) {
  const [searchterm, setSearch] = useState('')
  const dispatch = useAppDispatch()
  
  const debouncedSearch = useRef( // react remembers debounce between renders
    _.debounce((searchterm: string) => dispatch(setSearchTerm(searchterm)), 400) // delay call of dispatch 300ms
  ).current

  useEffect(() => {
    debouncedSearch(searchterm)
    return () => { // calls to cancel running when not on this page 
      debouncedSearch.cancel()
    }
  }, [searchterm, debouncedSearch])


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="search">
      <form>
        <input
          onChange={onChange}
          value={searchterm || ''}
          type="text"
          className={focus ? 'focused' : ''}
          placeholder="Search"
        />
        <button
          onClick={toggleFocus}
          id="search-button"
          className={focus ? 'active' : ''}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar

// elastic search
// https://www.elastic.co/?ultron=B-Stack-Trials-APJ-ANZ-Exact&gambit=Stack-Core&blade=adwords-s&hulk=paid&Device=c&thor=elastisearch
