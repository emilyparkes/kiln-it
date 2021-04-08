import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getCreations } from '../api/api'
import Card from './Card'

export default function Home () {
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
                    img={'/images/plate.jpeg'}
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
