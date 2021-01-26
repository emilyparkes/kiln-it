import React from 'react'

export default function CreationItemDisplay ({ creation }) {
  return (
    <>
      <img className='creation-img' src={creation.image} />
      <div className='textbox'>
        <div>{creation.name}</div>
        {/* <SubTitle>{creation.shape}</SubTitle>
        <Date>{creation.date}</Date>
        <Description>{creation.description}</Description> */}
      </div>
    </>
  )
}
