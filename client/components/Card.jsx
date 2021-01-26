import React from 'react'

export default function Card ({ img, title, date, description }) {
  return (
    <div className='card' >
      <img className='card-img' src={img} />
      {/* <Header>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Header> */}
      <p className='description' >{description}</p>
    </div>
  )
}
