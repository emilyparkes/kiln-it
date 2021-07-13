import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

function DataOptionItem ({ type, name, deleteItem }) {
  const [input, setCurrentInput] = useState('')
  const [edited, setEdited] = useState([])

  useEffect(() => {
    setCurrentInput(type[name])
  }, [])

  const handleChange = (e) => {
    setCurrentInput(e.target.value)
    setEdited([...edited, input])
  }

  return (
    <div className='text-item'>
      <TextField
        key={type.id}
        name={type[name]}
        value={input}
        onChange={handleChange}
      />
      <button className='option-btn option-btn--del' onClick={() => deleteItem(type.id)}>x</button>
    </div>
  )
}

export default DataOptionItem
