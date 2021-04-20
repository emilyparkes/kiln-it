import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getCreations } from '../apis/api'
import Card from './Card'

export default function Gallery () {
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
              const name = creation.name.toLowerCase().replace(' ', '-')
              return (
                <Link
                  to={`/creations/${name}`}
                  key={creation.creationId}
                >
                  <Card
                    img={'/images/plate.jpeg'}
                    name={creation.name}
                    shape={creation.shape}
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
