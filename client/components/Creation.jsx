import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Instagram as InstagramIcon } from '@mui/icons-material'

import { findString, toCapSpace } from '../client-utils'

function Creation () {
  const [creation, setCreation] = useState(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')

  const params = useParams()
  const creations = useSelector(store => store.creations)
  
  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']
  
  useEffect(() => {
    if (creations) {
      const name = toCapSpace(params.name)
      const creation = findString(creations, 'name', name)
      setCreation(creation)
    }
  }, [creations])

  useEffect(() => {
    setCurrentImage(images[imgIdx])
  }, [imgIdx])

  const getImage = (idx) => {
    setImgIdx(idx)
  }

  return (
    <>
      {creation && <>
        <div className='creation-container'>
          <img className='creation-img'
            src={currentImg} />

          <div className='icon-dots' >
            {images.map((dot, idx) => {
              return <div key={idx}
                className={imgIdx === idx ? 'dot selected' : 'dot'}
                id={idx}
                onClick={() => getImage(idx)}></div>
            })}
          </div>

          <div className='text-card'>
            <div className='text-card-content'>
              <p className='name'>{creation.name}</p>
              <p className='shape'>{creation.shape}</p>
              <p className='description'>{creation.description + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam cras pharetra magna. Mattis auctor integer nunc adipiscing. Urna tempus integer aliquam ultricies consequat, tempus, aliquam rhoncus, urna. Tortor tellus ac arcu nec, pulvinar. Ut praesent etiam dui, elit non mi viverra nisi. Accumsan commodo neque, in turpis. Morbi in id elit, ultrices donec erat gravida diam.'}</p>
              <p className='date'>March 12 2021</p>
            </div>
          </div>
          <InstagramIcon className='icon-instagram' />
        </div>
      </>
      }
    </>
  )
}

export default Creation

// const [touchStart, setTouchStart] = React.useState(0);
// const [touchEnd, setTouchEnd] = React.useState(0);

// function handleTouchStart(e) {
//     setTouchStart(e.targetTouches[0].clientX);
// }

// function handleTouchMove(e) {
//     setTouchEnd(e.targetTouches[0].clientX);
// }

// function handleTouchEnd() {
//     if (touchStart - touchEnd > 150) {
//         // do stuff here for left swipe
//         moveSliderRight();
//     }

//     if (touchStart - touchEnd < -150) {
//         // do stuff here for right swipe
//         moveSliderLeft();
//     }
// }
