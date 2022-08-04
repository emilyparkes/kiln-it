import React from 'react'
import { useSelector } from 'react-redux'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'

import { filterBy } from '../client-utils'

function StatusLog () {
  const focus = useSelector(store => store.navUtils)
  const creationsFiltered = useSelector(store => filterBy(store.filter, store.creations))
  // const creationsSearched = useSelector(store => searchBy(store.search, store.creations))

  return (
    <>
      <NavUtils/>
      {focus?.filter // filter bar active, list based on filters
      ? (
        <div className='log-container'>
          {creationsFiltered?.map((creation) => {
            return (
              <StatusLogItem key={creation.id}
                creation={creation}
                />
            )
          })}
        </div>
      ) : 'Sorry not yet searchable'
      
      // ( // or search bar active, list based on search terms
      //     <div className='log-container'>
      //       {creationsSearched?.map((creation) => {
      //         return (
      //           <StatusLogItem key={creation.id}
      //             creation={creation}
      //             />
      //         )
      //       })}
      //     </div>
      //   )
      }
    </>
  )
}

export default StatusLog
