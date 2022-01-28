import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HiFilter } from 'react-icons/hi'

import FilterModal from './FilterModal'
import FilterOption from './FilterOption'
import Accordion from '../accordion/Accordion'
import { addFilter, removeFilter } from '../../actions/filter'

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

  const renderSelectedFilters = (className) => {
    return Object.keys(filter).map(categoryName => {
      let arr = []
      filter[categoryName]?.map(name => {
        arr.push(name)
      })
      return arr.map(item => {
        return <p className={`${className} filter-label-${categoryName}`} key={item}>
          {item}
        </p>
      }
      )
    })
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
          {category.map((item) => {
            return <FilterOption
              key={item.id}
              category={categoryName}
              colour={colour}
              name={item[type]}
              select={handleSelect}
              remove={handleRemove}
              checked={filter[categoryName]?.includes(item[type])} />
          })}
        </div>
      </Accordion>
    )
  }

  return (
    <>
      <div className={'filter-bar'}>
        <div onClick={toggleModal} type='text' className={focus ? 'extendable-bar focused' : 'extendable-bar'}>
          {renderSelectedFilters('filter-horizontal')}
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
            {renderSelectedFilters('selected-filter-item')}
          </div>

          <div className='accordions'>
            {shapes && renderAccordion('shape')}
            {clay && renderAccordion('clay')}
            {glazes && renderAccordion('glazes')}
          </div>

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
