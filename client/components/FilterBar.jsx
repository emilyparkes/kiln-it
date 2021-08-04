import React from 'react'
import { connect } from 'react-redux'

import FilterModal from './FilterModal'
import FilterOption from './FilterOption'
import { addFilter, removeFilter, clearFilter } from '../actions/filter'

function FilterBar ({ filterBy, clay, glazes, shapes, dispatch }) {
  // const [currentFilters, setCurrentFilters] = useState([])

  const handleSelect = (category, value) => {
    dispatch(addFilter(category, value))
  }

  const handleRemove = (category, value) => {
    dispatch(removeFilter(category, value))
  }

  return (
    <div className='filter-bar'>
      <div>Filter Logo</div>
      <div>Current Filter</div>

      <FilterModal>
        <div className='current'>
          <p>Selected</p>
          {filterBy.filter}
        </div>

        <div className='statusList'>
          {clay &&
            clay.map((clayobj) => {
              return <FilterOption
                key={clayobj.id}
                category='clay'
                name={clayobj.clay}
                select={handleSelect}
                remove={handleRemove}/>
            })
          }
        </div>
        <div className='statusList'>
          {glazes &&
            glazes.map((glazeobj) => {
              return <FilterOption
                key={glazeobj.id}
                category='glaze'
                name={glazeobj.glaze}
                select={handleSelect}
                remove={handleRemove} />
            })
          }
        </div>
        <div className='statusList'>
          {shapes &&
            shapes.map((shapeobj) => {
              return <FilterOption
                key={shapeobj.id}
                category='shape'
                name={shapeobj.shape}
                select={handleSelect}
                remove={handleRemove} />
            })
          }

        </div>
      </FilterModal>

    </div>

  )
}

const mapStateToProps = (store) => {
  return {
    filterBy: store.filter,
    clay: store.clay,
    glazes: store.glazes,
    shapes: store.shapes
  }
}

export default connect(mapStateToProps)(FilterBar)
