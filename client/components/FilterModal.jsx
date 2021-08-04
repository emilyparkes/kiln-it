import React from 'react'

function FilterModal ({ filter, close, show, children }) {
  const showHideClassName = show ? 'modal open' : 'modal closed'

  const handleFilter = () => {
    filter()
    close()
  }

  return (
    <div className={showHideClassName}>
      <section className='model-box'>
        {children}
        <button className='filter' type='button' onClick={handleFilter}>
          Filter
        </button>
      </section>
    </div>
  )
}

export default FilterModal
