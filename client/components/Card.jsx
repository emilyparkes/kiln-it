import React, { useState } from 'react'

export default function Card ({ img, title, date, description }) {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className='card' >
      <img className='card-img' src={img}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}/>
      <div className='item-overlay'></div>
    </div>
  )
}
