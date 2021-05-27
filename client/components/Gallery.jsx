import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCreations } from '../actions/creations'
import Card from './Card'

function Gallery ({ creations }) {
  useEffect(() => {
    fetchCreations()
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

const mapStateToProps = (store) => {
  return {
    creations: store.creations
  }
}

export default connect(mapStateToProps)(Gallery)
