import React, { useEffect, useState } from 'react'

import { getCreations } from '../api/api'
import { StyledContainer, StatusLogItem } from './StatusLogItem.js'

export default function StatusLog () {
  const [creations, setCreations] = useState(null)

  useEffect(() => {
    getCreations()
      .then(resp => {
        setCreations(resp)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {creations
        ? <StyledContainer>
          {creations.map(creation => {
            return <StatusLogItem key={creation.creationId}
              creation={creation}
            />
          })}
        </StyledContainer>
        : null}
    </>
  )
}
