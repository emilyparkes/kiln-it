import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HiFilter } from 'react-icons/hi'

import FilterModal from './FilterModal'
import FilterOption from './FilterOption'
import Accordion from '../accordion/Accordion'
import { addFilter, removeFilter, clearFilter } from '../../actions/filter'

function FilterBar ({ filter, clay, glazes, shapes, dispatch, focus, toggleFocus }) {
  const [show, setShowModel] = useState(false)

  const handleSelect = (category, value) => {
    dispatch(addFilter(category, value))
  }

  const handleRemove = (category, value) => {
    dispatch(removeFilter(category, value))
  }

  const toggleModal = () => {
    setShowModel(!show)
  }

  const clear = () => {
    dispatch(clearFilter())
  }

  const renderSelectedFilters = (className, onBar) => {
    const listFilters = () => {
      // take filters out of store categorised objects, put into list
      return Object.keys(filter).map(categoryName => {
        let selecterFilters = []
        filter[categoryName]?.map(name => {
          selecterFilters.push(name)
        })
        // list out list and colour-code!
        return selecterFilters.map(aFilter => {
          return <p className={`${className} filter-label-${categoryName}`} key={aFilter}>
            {aFilter}
          </p>
        })
      })
    }
    if (Object.keys(filter).length && !onBar) { // if have filter and not on bar (on modal) - show resuts
      return listFilters()
    } else if (!Object.keys(filter).length && onBar) { // if no filter and on bar - show placeholder
      return <p className={`${className} placeholder`}>Select Filters</p>
    } else if (Object.keys(filter).length && onBar) { // if have filter and on bar - show resuts
      return listFilters()
    }
  }

  const trueFalseCheckboxes = (categoryName, cat, type) => {
    console.log('obj keys: ', Object.keys(filter).length > 0)
    if (Object.keys(filter).length > 0 && filter[categoryName]?.includes(cat[type])) {
      return true
    } else {
      return false
    }
  }

  const renderAccordion = (categoryName) => {
    const options = {
      shape: { id: 1, colour: '#88A4B8', category: shapes, type: 'shape' },
      clay: { id: 2, colour: '#BA6D32', category: clay, type: 'clay' },
      glazes: { id: 2, colour: '#6BA368', category: glazes, type: 'glaze' }
    }
    const { id, colour, category, type } = options[categoryName]
    return (
      <Accordion title={categoryName} num={id}>
        <div className='checklist'>
          {category.map((cat) => {
            // console.log('checked val: ', filter, filter[categoryName]?.includes(cat[type]))
            return <FilterOption
              key={cat.id}
              category={categoryName}
              colour={colour}
              name={cat[type]}
              select={handleSelect}
              remove={handleRemove}
              checked={trueFalseCheckboxes(categoryName, cat, type)} />
          })}
        </div>
      </Accordion>
    )
  }

  return (
    <>
      <div className='filter-bar'>
        <div onClick={toggleModal} type='text' className={focus ? 'extendable-bar focused' : 'extendable-bar'}>
          {focus ? renderSelectedFilters('filter-horizontal', true) : null}
        </div>

        <button onClick={toggleFocus} id='filter-button'
          className={focus ? 'active' : undefined}><HiFilter/></button>
      </div>

      {show &&
        <FilterModal>

          <div className='styled-burger line line-dark line-open'
            onClick={toggleModal}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p className='filter-modal-heading'>FILTER</p>
          <p className='current-filter'>Selected Filters</p>

          <div className='selected-filters'>
            {renderSelectedFilters('selected-filter-item', false)}
          </div>

          <div className='accordions'>
            {shapes && renderAccordion('shape')}
            {clay && renderAccordion('clay')}
            {glazes && renderAccordion('glazes')}
          </div>

          <div onClick={clear}>Clear</div>

        </FilterModal>
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    filter: store.filter,
    clay: store.clay,
    glazes: store.glazes,
    shapes: store.shapes
  }
}

export default connect(mapStateToProps)(FilterBar)
