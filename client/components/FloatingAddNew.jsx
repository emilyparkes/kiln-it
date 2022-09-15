import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

import { useStyles } from '../styles/mui_overrides'

function FloatingAddNew() {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/creations/new')
  }
  return (
      <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleClick}>
        <Fab color="secondary" aria-label="add" className={classes.MuiFab} >
          <AddIcon />
        </Fab>
      </Box>
  )
}

export default FloatingAddNew
