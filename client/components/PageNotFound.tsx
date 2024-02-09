import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export default function PageNotFound() {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          margin: '20px',
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
              Oops! Looks like you stumbled into the wrong place somehow...
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/gallery')}
              >
                Back Home
              </Button>
            </Grid>
            <Grid xs={12}>
              <img
                src="/assets/pagenotfound.png"
                alt="Page Not Found"
                width={'100%'}
                height={'100%'}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}