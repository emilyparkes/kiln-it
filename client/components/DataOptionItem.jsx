import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import { CgClose } from 'react-icons/cg'

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
      <CgClose className='option-btn option-btn--del' onClick={() => deleteItem(type.id)} />
    </div>
  )
}

export default DataOptionItem
