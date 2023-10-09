import { useState, useEffect, ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import { CgClose } from 'react-icons/cg'
// import { DBGlaze } from '../../models/Glaze'
// import { DBShape } from '../../models/Shape'
// import { DBStatus } from '../../models/Status'
// import { DBClay } from '../../models/Clay'

// type Options = DBClay | DBGlaze | DBShape | DBStatus
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any
  name: string,
  deleteItem: (id: number) => void
}

function DataOptionItem({ type, name, deleteItem }: Props) {
  console.log('type: ', type)
  const [input, setCurrentInput] = useState('' as keyof typeof type)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [edited, setEdited] = useState([] as any)

  useEffect(() => {
    console.log('type[name]', type[name])
    setCurrentInput(type[name as keyof typeof type])
  }, [type, name])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value)
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
