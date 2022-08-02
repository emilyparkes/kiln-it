import React from 'react'

// eslint-disable-next-line no-unused-vars
function FilterSidebar ({ filter, open, setOpen, children }) {
  console.log('open: ', open)
  const showHideClassName = open ? 'filtersidebar filter-slide-open' : 'filtersidebar filter-slide-closed'
  
  return (
    <div className={showHideClassName}>
      {/* <section className='filter-model-box'> */}
        {children}
      {/* </section> */}
    </div>
  )
}

export default FilterSidebar
