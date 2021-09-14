import React from 'react'

function FilterModal ({ filter, close, show, children }) {
  const showHideClassName = show ? 'modal open' : 'modal closed'

  return (
    <div className={showHideClassName}>
      <section className='filter-model-box'>
        {children}
      </section>
    </div>
  )
}

export default FilterModal
