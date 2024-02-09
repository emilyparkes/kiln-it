import { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

import FilterBar from './FilterBar'
import SearchBar from './SearchBar'

import { setFocus } from '../../actions/navutils-focus'
import Toolbar from '@mui/material/Toolbar'

export default function NavUtils() {
  const dispatch = useAppDispatch()
  const focus = useAppSelector((store) => store.navUtils)

  const toggleFocus = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filter = !focus.filter
    const search = !focus.search
    dispatch(setFocus({ filter, search }))
  }

  return (
    <>
      {focus && (
          <Toolbar sx ={{ width: '100%', height: '45px', margin: '0px auto 10px auto', backgroundColor: '#e3c6a4'}}>
            <FilterBar focus={focus.filter} toggleFocus={toggleFocus} />
            <SearchBar focus={focus.search} toggleFocus={toggleFocus} />
          </Toolbar>
      )}
    </>
  )
}
