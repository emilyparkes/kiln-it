import React, { useEffect, useState } from 'react'

export default function Card ({ img, title, date, description }) {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
  }, [isShown])

  return (
    <div className='card' >
      <div className='card-overlay v2' text={title} >
        <img className='card-img' src={img}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      </div>

    </div>
  )
}

// {isShown
//   ? <div className='card-overlay'>
//     <h6>{title}</h6>
//     <p>{date}</p>
//     <p>{description}</p>
//   </div>
//   : null }
