import React from 'react'
import { useSelector } from 'react-redux'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'
import { filterBy } from '../client-utils'

function StatusLog () {

  const creations = useSelector(store => filterBy(store.filter, store.creations))

  return (
    <>
      <NavUtils/>
      {creations?.length ? (
        <div className='log-container'>
          {creations.map((creation) => {
            return (
              <StatusLogItem key={creation.id}
                creation={creation}
                />
            )
          })}
        </div>
      )
        : 'Sorry nothing for you'
      }
    </>
  )
}

export default StatusLog
