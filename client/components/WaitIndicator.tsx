import { useAppSelector } from '../hooks'
import { Box, CircularProgress } from '@mui/material'

export default function WaitIndicator() {
  const waiting = useAppSelector((store) => store.waitIndicator)
  return (
    <>
      {waiting && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  )
}
