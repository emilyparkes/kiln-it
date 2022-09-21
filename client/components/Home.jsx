import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

function Home() {
  const styles = {
    media: {
      height: '100%',
      paddingTop: '56.25%', // 16:9
    },
    card: {
      position: 'relative',
      height: '94vh',
    },
    overlay: {
      position: 'absolute',
      top: '31vh',
      left: '14vw',
      color: 'rgb(116, 79, 68)',
      backgroundColor: '#e3c6a482',
      borderRadius: '16px',
      width: '312px',
      padding: '10px',
    },
  }
  return (
    <>
      <Card style={styles.card}>
        <CardMedia image={'/assets/hero.jpeg'} style={styles.media} />
        <Link to={'/gallery'}>
          <CardContent style={styles.overlay}>
            <Typography variant="h3">See the</Typography>
            <Typography variant="h1">Gallery</Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}

export default Home
