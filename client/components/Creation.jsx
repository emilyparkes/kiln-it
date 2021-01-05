import React from 'react'

export default function Creation (props) {
  const { shape, id } = props.match.params
  const words = shape.split('-')
  const creationShape = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

  return (
    <>
      <p>
        I am {creationShape} with {id}
      </p>
    </>
  )
}
