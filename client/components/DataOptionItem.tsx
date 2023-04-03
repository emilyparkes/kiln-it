import { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import { CgClose } from 'react-icons/cg'

interface Props {
  type: any,
  name: string,
  deleteItem: any
}

function DataOptionItem({ type, name, deleteItem }: Props) {
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
    <div className="text-item">
      <TextField
        key={type.id}
        name={type[name]}
        value={input}
        onChange={handleChange}
      />
      <CgClose
        className="option-btn option-btn--del"
        onClick={() => deleteItem(type.id)}
      />
    </div>
  )
}

export default DataOptionItem
