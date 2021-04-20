import React, { useEffect, useState } from 'react'
import { getCreationById } from '../apis/api'

export default function Creation (props) {
  const [creation, setCreation] = useState(null)

  // const { name } = props.match.params
  // const words = name.split('-')
  // const formatName = words
  //   .map((word) => {
  //     return word[0].toUpperCase() + word.substring(1)
  //   })
  //   .join(' ')

  useEffect(() => {
    getCreationById(1)
      .then((resp) => {
        setCreation(resp)
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
    <>
      {creation
        ? <>
          <img className='creation-img' src='/images/plate.jpeg'/>
          <div className='icon-dots'> O O O </div>
          <div className='text-card'>
            <div className='text-card-content'>
              <p className='name'>{creation.name}</p>
              <p className='shape'>{creation.shape}</p>
              <p className='description'>{creation.description + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam cras pharetra magna. Mattis auctor integer nunc adipiscing. Urna tempus integer aliquam ultricies consequat, tempus, aliquam rhoncus, urna. Tortor tellus ac arcu nec, pulvinar. Ut praesent etiam dui, elit non mi viverra nisi. Accumsan commodo neque, in turpis. Morbi in id elit, ultrices donec erat gravida diam.'}</p>
              <p className='date'>March 12 2021</p>
            </div>
          </div>
          <div className='icon-instagram'>O</div>
        </>
        : 'I\'m sorry no art was made apparently'}
    </>
  )
}
