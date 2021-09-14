import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toLowHyphen, filterBy } from '../client-utils'

import Card from './Card'

function Gallery ({ creations }) {
  return (
    <>
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

const mapStateToProps = (store) => {
  return {
    // creations: store.creations
    creations: filterBy(store.filter, store.creations)
  }
}

export default connect(mapStateToProps)(Gallery)
