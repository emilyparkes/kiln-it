import { useAppSelector } from '../hooks'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'
import FloatingAddNew from './FloatingAddNew'
import WaitIndicator from './WaitIndicator'
import { filterBy, searchBy } from '../client-utils'

function StatusLog() {
  const focus = useAppSelector((store) => store.navUtils)

  const creationsFiltered = useAppSelector((store) =>
    filterBy(store.filter, store.creations)
  )
  const searchterm = useAppSelector((store) => store.search)

  const creationsSearched = useAppSelector((store) =>
    store.search ? searchBy(store.search, store.creations) : store.creations
  )

  return (
    <>
      <NavUtils />

      <WaitIndicator />

      <Grid2 container spacing={1} >
        {focus?.filter ? (
          <>
            {creationsFiltered?.map((creation) => (
              <Grid2 key={creation.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <StatusLogItem creation={creation} />
              </Grid2>
            ))}

            <FloatingAddNew />
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

            {creationsSearched?.map((creation) => (
              <Grid2 key={creation.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <StatusLogItem creation={creation} />
              </Grid2>
            ))}

            <FloatingAddNew />
          </>
        )}
      </Grid2>
    </>
  )
}

export default StatusLog
