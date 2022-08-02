import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { toLowHyphen, filterBy } from '../client-utils'

import Card from './Card'
import NavUtils from './nav-utils/NavUtils'

function Gallery () {

  const creations = useSelector(store => filterBy(store.filter, store.creations))

  return (
    <>
      <NavUtils/>
      {creations && (
        <div className='card-root'>
          <div className='card-container'>
            {creations.map((creation) => {
              const name = toLowHyphen(creation.name)
              return (
                <Link
                  to={`/creations/${name}`}
                  key={creation.id}
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
      )}
    </>
  )
}

export default Gallery
