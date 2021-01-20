import React, { useEffect, useState } from 'react'
import { getCreationById } from '../api/api'
import { CreationItemDisplay } from './CreationItemDisplay'

export default function Creation (props) {
  const [creation, setCreation] = useState(null)

  const { shape, id } = props.match.params
  const words = shape.split('-')
  const textShape = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

  useEffect(() => {
    getCreationById(props.match.params.id)
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
        ? <CreationItemDisplay key={creation.creationId} creation={creation} />
        : <p>I am {textShape} with {id}</p>}
    </>
  )
}
