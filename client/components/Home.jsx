import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getCreations } from '../api/api'
import Card from './Card'

export default function Home () {
  const [creations, setCreations] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const resp = await getCreations()
        setCreations(resp)
      } catch (error) {
        console.log('error: ', error.message)
      }
    })()
  }, [])

  return (
    <>
      {/* <h1>Home</h1>
      <p>See a list of clay projects</p> */}

      {creations ? (
        <div className='card-root'>
          <div className='card-container'>
            {creations.map((creation) => {
              const shape = creation.shape.toLowerCase().replace(' ', '-')
              return (
                <Link
                  to={`/creations/${shape}/${creation.creationId}`}
                  key={creation.creationId}
                >
                  <Card
                    img={
                      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwildtussah.com%2Fwp-content%2Fuploads%2F2016%2F11%2FCeramic-plate-speckle-glaze-side-view-web.jpg&f=1&nofb=1'
                    }
                    title={creation.shape}
                    date={creation.date_created}
                    description={creation.glaze}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}
