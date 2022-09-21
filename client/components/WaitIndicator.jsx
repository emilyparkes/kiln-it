import React from 'react'
import { useSelector } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'

export default function WaitIndicator() {
  const waiting = useSelector((store) => store.waitIndicator)
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
