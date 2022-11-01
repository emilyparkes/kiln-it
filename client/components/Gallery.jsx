import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

import { toLowHyphen, filterBy, searchBy } from '../client-utils'

import Card from './Card'
import NavUtils from './nav-utils/NavUtils'
import WaitIndicator from './WaitIndicator'

function Gallery() {
  const focus = useSelector((store) => store.navUtils)

  const creationsFiltered = useSelector((store) =>
    filterBy(store.filter, store.creations)
  )
  const searchterm = useSelector((store) => store.search)

  const creationsSearched = useSelector((store) =>
    store.search ? searchBy(store.search, store.creations) : store.creations
  )

  return (
    <>
      <NavUtils />
      <WaitIndicator />
      {focus?.filter ? (
        <>
          <div className="card-root">
            <div className="card-container">
              {creationsFiltered?.map((creation) => {
                const name = toLowHyphen(creation.name)
                return (
                  <Link to={`/creations/${name}`} key={creation.id}>
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
        </>
      ) : (
        <>
          {searchterm && (
            <Typography
              variant="h6"
              sx={{ paddingLeft: '12px', marginBottom: '10px' }}
            >
              Search results for &apos;{searchterm}&apos;
            </Typography>
          )}

          <div className="card-root">
            <div className="card-container">
              {creationsSearched?.map((creation) => {
                const name = toLowHyphen(creation.name)
                return (
                  <Link to={`/creations/${name}`} key={creation.id}>
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
        </>
      )}
    </>
  )
}

export default Gallery
