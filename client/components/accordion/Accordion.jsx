import React, { useState } from 'react'

const Accordion = ({ title, children, num }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordion-item'>
      <button className='accordion-summary'
        aria-expanded={isActive ? 'true' : 'false'}
        aria-controls={`accordion-panel-${num}`}
        id={`accordion-header-${num}`}
        onClick={() => setIsActive(!isActive)}>

        <div className='accordion-title'>{title}</div>
        <div className='accordion-symbol'>{isActive ? '-' : '+'}</div>

      </button>

      {isActive &&
      <div className='accordion-content' aria-labelledby={`accordion-header-${num}`}>
        {children}
      </div>}
    </div>
  )
}

export default Accordion
