import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Card sx={{position: 'relative',
      height: '94vh'
    }}>
        <CardMedia image={'/assets/hero.jpeg'} sx={{height: '100%',
      paddingTop: '56.25%', // 16:9
    }} />
        <Link to={'/gallery'}>
          <CardContent sx={{position: 'absolute',
      top: '31vh',
      left: '14vw',
      color: 'rgb(116, 79, 68)',
      backgroundColor: '#e3c6a482',
      borderRadius: '16px',
      width: '312px',
      padding: '10px',}}>
            <Typography variant="h3">See the</Typography>
            <Typography variant="h1">Gallery</Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}

export default Home
