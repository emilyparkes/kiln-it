import React, { useEffect, useState } from 'react'

import { getCreations } from '../api/api'
import StatusLogItem from './StatusLogItem'

export default function StatusLog () {
  const [creations, setCreations] = useState(null)

  useEffect(() => {
    getCreations()
      .then((resp) => {
        setCreations(resp)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {creations ? (
        <div className='log-container'>
          {creations.map((creation) => {
            return (
              <StatusLogItem key={creation.creationId} creation={creation} />
            )
          })}
        </div>
      ) : null}
    </>
  )
}
