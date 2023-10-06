import { useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

import { toLowHyphen, filterBy, searchBy } from '../client-utils'

import Card from './Card'
import WaitIndicator from './WaitIndicator'
import { DBCreation } from '../../models/Creation'
import { Container } from '@mui/material'

function Gallery() {
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
      <WaitIndicator />
      {focus?.filter ? (
        <>
          <Container sx={{paddingTop: '75px', paddingLeft: '11px'}}>
            <Grid2 container spacing={0.5}>
              {creationsFiltered?.map((creation: DBCreation) => {
                const name = toLowHyphen(creation.name)
                return (
                  <Grid2 key={creation.id} xs={6} sm={6} md={4} lg={4} xl={2}>
                  <Link to={`/creations/${name}`} >
                    <Card
                      img={'/images/plate.jpeg'}
                      name={creation.name}
                      shape={creation.shape}
                      description={creation.glaze}
                    />
                  </Link>
                  </Grid2>
                )
                })}
              </Grid2>
            </Container>
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

          <Container sx={{paddingTop: '75px', paddingLeft: '11px'}}>
            <Grid2 container spacing={0.5}>
              {creationsSearched?.map((creation) => {
              const name = toLowHyphen(creation.name)
                return (
                  <Grid2 key={creation.id} xs={6} sm={6} md={4} lg={4} xl={2}>
                  <Link to={`/creations/${name}`}>
                    <Card
                      img={'/images/plate.jpeg'}
                      name={creation.name}
                      shape={creation.shape}
                      description={creation.glaze}
                    />
                  </Link>
                  </Grid2>
                )
              })}
            </Grid2>
          </Container>
        </>
      )}
    </>
  )
}

export default Gallery
