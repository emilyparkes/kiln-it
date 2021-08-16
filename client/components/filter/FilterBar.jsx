import React from 'react'
import { connect } from 'react-redux'

import FilterModal from './FilterModal'
import FilterOption from './FilterOption'
import Accordion from '../accordion/Accordion'
import { addFilter, removeFilter } from '../../actions/filter'

function FilterBar ({ filter, clay, glazes, shapes, dispatch }) {
  const handleSelect = (category, value) => {
    dispatch(addFilter(category, value))
  }

  const handleRemove = (category, value) => {
    dispatch(removeFilter(category, value))
  }

  return (
    <div className='filter-bar'>

      <FilterModal>

        <div className='current-filter'>
          <p>Selected Filters</p>
          {Object.keys(filter).map(categoryName => {
            return <div className={`category-${categoryName}`} key={categoryName}>
              {filter[categoryName]?.map(name => {
                return <div className='category name' key={name}>{name}</div>
              }
              )}</div>
          })}
        </div>

        <div className='accordions'>
          {shapes &&
            <Accordion title={'shape'} num='1'>
              <div className='checklist'>
                {shapes.map((shapeobj) => {
                  return <FilterOption
                    key={shapeobj.id}
                    category='shape'
                    name={shapeobj.shape}
                    select={handleSelect}
                    remove={handleRemove}
                    checked={filter['shape']?.includes(shapeobj.shape)} />
                })}
              </div>
            </Accordion>}

          {clay &&
            <Accordion title={'clay'} num='2'>
              <div className='checklist'>
                {clay.map((clayobj) => {
                  return <FilterOption
                    key={clayobj.id}
                    category='clay'
                    name={clayobj.clay}
                    select={handleSelect}
                    remove={handleRemove}
                    checked={filter['clay']?.includes(clayobj.clay)} />
                })}
              </div>
            </Accordion>}

          {glazes &&
            <Accordion title={'glazes'} num='3'>
              <div className='checklist'>
                {glazes.map((glazesobj) => {
                  return <FilterOption
                    key={glazesobj.id}
                    category='glazes'
                    name={glazesobj.glaze}
                    select={handleSelect}
                    remove={handleRemove}
                    checked={filter['glazes']?.includes(glazesobj.glazes)} />
                })}
              </div>
            </Accordion>}

        </div>
      </FilterModal>
    </div>
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
