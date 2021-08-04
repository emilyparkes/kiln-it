import React, { useState } from 'react'

export default function FilterOption ({ category, name, select, remove }) {
  const [selected, setSelected] = useState(false)

  const choose = (category, value) => {
    setSelected(true)
  }

  const handleSelection = (category, value) => {
    setSelected(!selected)
    selected
      ? remove(category, value)
      : select(category, value)
  }

  return (
    <div>
      <div>O</div>
      <p onClick={() => handleSelection(category, name)}>{name}</p>
    </div>
  )
}
