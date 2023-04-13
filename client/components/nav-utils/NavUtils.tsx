import { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

import FilterBar from './FilterBar'
import SearchBar from './SearchBar'

import { setFocus } from '../../actions/navutils-focus'

function NavUtils () {

  const dispatch = useAppDispatch()
  const focus = useAppSelector(store => store.navUtils)

  const toggleFocus = (event: FormEvent<HTMLFormElement>) => {
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
