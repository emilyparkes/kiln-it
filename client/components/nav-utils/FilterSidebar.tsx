import { Dispatch, ReactNode, SetStateAction } from "react"

interface FilterSidebarProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  children: ReactNode
}

// eslint-disable-next-line no-unused-vars
export default function FilterSidebar ({ open, children }: FilterSidebarProps) {
  const showHideClassName = open ? 'filtersidebar filter-slide-open' : 'filtersidebar filter-slide-closed'
  
  return (
    <div className={showHideClassName}>
      {/* <section className='filter-model-box'> */}
        {children}
      {/* </section> */}
    </div>
  )
}
