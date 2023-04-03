interface Props {
  open: any,
  children: any
}

// eslint-disable-next-line no-unused-vars
function FilterSidebar ({ open, children }: Props) {
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
