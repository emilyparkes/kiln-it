import { useNavigate } from 'react-router-dom'

import { Box, Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'


export default function FloatingAddNew() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/creations/new')
  }
  return (
      <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleClick}>
        <Fab color="white" aria-label="add" sx={{position: 'fixed', bottom: '1rem', right: '2rem',}} >
          <AddIcon />
        </Fab>
      </Box>
  )
}
