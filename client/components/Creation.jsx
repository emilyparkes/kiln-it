import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IoLogoInstagram } from 'react-icons/io'

import { findString, toCapSpace } from '../client-utils'

function Creation ({ all, match }) {
  const [creation, setCreation] = useState(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')

  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']

  useEffect(() => {
    if (all) {
      const name = toCapSpace(match.params.name)
      const creation = findString(all.creations, 'name', name)
      setCreation(creation)
    }
  }, [all])

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
          <IoLogoInstagram className='icon-instagram' />
        </div>
      </>
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    all: store.all
  }
}

export default connect(mapStateToProps)(Creation)

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
