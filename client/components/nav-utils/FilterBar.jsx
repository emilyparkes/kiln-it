import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HiFilter } from 'react-icons/hi'
import { Chip, Stack, Button, ThemeProvider } from '@mui/material'
import { theme } from '../theme/theme'


import FilterSidebar from './FilterSidebar.jsx'
import FilterOption from './FilterOption'
import AnAccordion from '../accordion/Accordion'

import { addFilter, removeFilter, clearFilter } from '../../actions/filter'

function FilterBar({ focus, toggleFocus }) {
  const [open, setOpen] = useState(false)
  const [currentAccordian, setCurrentAccordian] = useState('panel1')

  const dispatch = useDispatch()

  const filter = useSelector((store) => store.filter)
  const clay = useSelector((store) => store.clay)
  const glazes = useSelector((store) => store.glazes)
  const shapes = useSelector((store) => store.shapes)

  const filterKeyArr = Object.keys(filter)

  const select = (category, value) => {
    dispatch(addFilter(category, value))
  }

  const remove = (category, value) => {
    dispatch(removeFilter(category, value))
  }

  const clear = () => {
    dispatch(clearFilter())
    setCurrentAccordian('panel1')
  }

  const openAccordian = (accordianNum,) => {
    setCurrentAccordian(accordianNum === currentAccordian ? false : accordianNum )
  }

  const renderSelectedFilters = (className, onBar) => {
    const listFilters = () => {
      // take filters out of store categorised objects, put into list
      return filterKeyArr.map((categoryName) => {
        let selecterFilters = []
        filter[categoryName]?.map((name) => {
          selecterFilters.push(name)
        })
        // list out list and colour-code!
        return selecterFilters.map((aFilter) => {
          return (
             <Chip 
             key={aFilter} 
             label={aFilter} 
             color={categoryName}
             onDelete={() => remove(categoryName, aFilter)}/>
          )
        })
      })
    }
    if (filterKeyArr.length && !onBar) {
      // if have filter and not on bar (on modal) - show resuts
      return listFilters()
    } else if (!filterKeyArr.length && onBar) {
      // if no filter and on bar - show placeholder
      return <p className={`${className} placeholder`}>Select Filters</p>
    } else if (filterKeyArr.length && onBar) {
      // if have filter and on bar - show resuts
      return listFilters()
    }
  }

  const trueFalseCheckboxes = (categoryName, cat, type) => {
    if (filterKeyArr.length > 0 && filter[categoryName]?.includes(cat[type])) {
      return true
    } else {
      return false
    }
  }

  const renderAccordion = (categoryName) => {
    const options = {
      shape: { id: 1, colour: '#88A4B8', category: shapes, type: 'shape' },
      clay: { id: 2, colour: '#BA6D32', category: clay, type: 'clay' },
      glazes: { id: 3, colour: '#6BA368', category: glazes, type: 'glaze' },
    }
    const { id, colour, category, type } = options[categoryName]
    return (
      <AnAccordion
        title={categoryName}
        num={id}
        currentAccordian={currentAccordian}
        openAccordian={openAccordian}
      >
        <div className='checklist'>
          {category.map((cat) => {
            // console.log('checked val: ', filter, filter[categoryName]?.includes(cat[type]))
            return (
              <FilterOption
                key={cat.id}
                category={categoryName}
                colour={colour}
                name={cat[type]}
                select={select}
                remove={remove}
                checked={trueFalseCheckboxes(categoryName, cat, type)}
              />
            )
          })}
        </div>
      </AnAccordion>
    )
  }

  return (
    <>
      <div className='filter-bar'>
        <div
          onClick={() => setOpen(true)}
          type='text'
          className={focus ? 'extendable-bar focused' : 'extendable-bar'}
        >
          {focus ? renderSelectedFilters('filter-horizontal', true) : null}
        </div>

        <button
          onClick={toggleFocus}
          id='filter-button'
          className={focus ? 'active' : undefined}
        >
        <HiFilter/>
        </button>
      </div>

      <FilterSidebar open={open} setOpen={setOpen}>
        <div className='filter-header'>
          <h4 className='filter-modal-heading'>FILTER</h4>

          <ThemeProvider theme={theme}>
            <Stack direction='row' spacing={4} justifyContent='center' alignItems='center' >
              <Button onClick={clear} variant='outlined' color='secondary' size='small'>
                Clear
              </Button>
              <Button onClick={() => setOpen(false)} variant='contained' color='secondary' size='small'>
                {filterKeyArr.length ? 'Apply' : 'Go Back'}
              </Button>
            </Stack>
          </ThemeProvider>
        </div>

        <p className='current-filter'>Selected Filters</p>


        <div className='selected-filters'>
          <Stack direction='row' spacing={1} justifyContent='center' flexWrap='wrap'>
            {renderSelectedFilters('selected-filter-item', false)}
          </Stack>
        </div>

        <div className='accordions'>
          {shapes && renderAccordion('shape')}
          {clay && renderAccordion('clay')}
          {glazes && renderAccordion('glazes')}
        </div>

      </FilterSidebar>
    </>
  )
}

export default FilterBar
