import React from 'react'
import { useSelector } from 'react-redux'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'
import { updateCreation } from '../apis/creations'
import { filterBy } from '../client-utils'

function StatusLog ({ history }) {

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
                updateCreation={updateCreation}
                history={history}/>
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
