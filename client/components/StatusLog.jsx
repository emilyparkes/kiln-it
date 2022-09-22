import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'
import FloatingAddNew from './FloatingAddNew'
import WaitIndicator from './WaitIndicator'
import { filterBy, searchBy } from '../client-utils'

function StatusLog() {
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
          {creationsFiltered?.map((creation) => (
            <StatusLogItem key={creation.id} creation={creation} />
          ))}

          <FloatingAddNew />
        </>
      ) : (
        <>
          {searchterm && (
            <Typography variant="h6">
              Search results for &apos;{searchterm}&apos;
            </Typography>
          )}
          {creationsSearched?.map((creation) => (
            <StatusLogItem key={creation.id} creation={creation} />
          ))}

          <FloatingAddNew />
        </>
      )}
    </>
  )
}

export default StatusLog
