import React from 'react'

export default function StatusLogItem ({ creation }) {
  const style = creation.status.toLowerCase().replace(/\s/g, '-')
  return (
    <div className='log' key={creation.id}>
      {/* Img */}
      <div>{creation.shape}</div>
      <div>{creation.date_created}</div>
      <div className={`status ${style}`} >{creation.status}</div>
    </div>
  )
}
