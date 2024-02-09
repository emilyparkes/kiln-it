import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material'

export default function About() {
  return (
    <div className='about'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardMedia
            component='img'
            sx={{ marginBottom: '15px', maxHeight: '215px' }}
            src='/images/emily.png'
            alt='Close up face, angled to the left. Wearing a leopard print hat with big 70s glasses sitting on the brim. Slight closed mouth smile. Bold black eyeliner, and a golden septum ring. Background is green bush trees and leaves.'
          />

          <Typography variant='h5' component='div' mb={2}>
            Emily Coco - The Maker
          </Typography>

          <Typography paragraph>
            Hello! I am the person behind Dirty Hands Studio. Doing pottery has
            been a fun hobby of mine for a wee while and I have been lucky
            enough to inherit my grandmothers pottery wheel. This site is a way
            for me to share my creations with friends and whanau over the world
            and sell a few pieces here and there via instagram too. This is why
            showing the progress of my pieces through some of the photos has
            been important to me. Appreciating the stages and work gone into the
            creations that get seen at the end. I hope for it also to be a
            reflection of my learning journey too. A way to look back and
            appreciate. Enjoy!
          </Typography>
        </CardContent>

        <CardActions>
          <Button color='secondary' size='small'>
            Instagram
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
