import React, { useEffect, useState } from 'react'

import { getCreations } from '../api/api'
import { Card, StyledContainer, StyledRoot } from './Card'

export default function Home () {
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
      {/* <h1>Home</h1>
      <p>See a list of clay projects</p> */}

      {creations
        ? <StyledRoot>
          <StyledContainer>
            {creations.map(creation => {
              return <Card key={creation.creationId}
                img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwildtussah.com%2Fwp-content%2Fuploads%2F2016%2F11%2FCeramic-plate-speckle-glaze-side-view-web.jpg&f=1&nofb=1'}
                title={creation.shape}
                date={creation.date_created}
                description={creation.glaze}
              />
            })}
          </StyledContainer>
        </StyledRoot>
        : null}
    </>
  )
}
