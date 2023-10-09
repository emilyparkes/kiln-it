import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material'

function About() {
  return (
      <Card sx={{ minWidth: 275, width: '85%', margin: '10px auto'}}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ marginBottom: '15px', maxHeight: '215px' }}
            src="/images/emily.png"
            alt="Close up face, angled to the left. Wearing a leopard print hat with big 70s glasses sitting on the brim. Slight closed mouth smile. Bold black eyeliner, and a golden septum ring. Background is green bush trees and leaves."
          />

          <Typography variant="h5" component="div" mb={2}>
            Emily Coco - The Maker
          </Typography>

          <Typography variant="subtitle2" paragraph sx={{margin: '5px'}}>
            Hello! I am the person behind Dirty Hands Studio. Doing pottery has
            been a fun hobby of mine for a wee while and I have been lucky
            enough to inherit my grandmothers pottery wheel. This site is a way
            for me to share my creations with friends and whānau over the world
            and sell a few pieces here and there via instagram too. This is why
            showing the progress of my pieces through some of the photos has
            been important to me. Appreciating the stages and work gone into the
            creations that get seen at the end. I hope for it also to be a
            reflection of my learning journey too. A way to look back and
            appreciate. Enjoy!
          </Typography>
        </CardContent>

        <CardActions>
          <Link to='https://www.instagram.com/dirtyhands.studio/'>
            <Button variant="contained" color="secondary" size="small" sx={{margin: '0 0 5px 5px'}}>
              Instagram
            </Button>
          </Link>
        </CardActions>
      </Card>
  )
}

export default About
