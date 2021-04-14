import React from 'react'

export default function Card ({ img, name, shape, description }) {
  return (
    <div className='card' >
      <div className='card-overlay'>
        <div className='card-overlay-text'>
          <p>{name}</p>
          <p>{shape}</p>
        </div>
        {/* <p>{description}</p> */}
      </div>
      <img className='card-img' src={img}/>
    </div>
  )
}
