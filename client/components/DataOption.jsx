import React, { useState } from 'react'

import { TextField } from '@material-ui/core'
import { showError } from '../actions/error'
// import { addNewShape, addNewStatus, addNewClay, addNewGlaze } from '../apis/dataOptions'

function DataOption ({ name, arrOfType, dispatch }) {
  const [dataList, setDataList] = useState(null)
  const [currentAddition, setCurrentAddition] = useState('')
  const [newInputVisible, setNewInputVisible] = useState(false)

  const showAddInput = () => {
    setNewInputVisible(!newInputVisible)
  }

  const handleChange = (e) => {
    setCurrentAddition(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    setDataList([
      ...dataList,
      currentAddition
    ])
  }

  const save = (e) => {
    switch (name) {
      case 'shape':
        // addNewShape(dataList)
        break
      case 'status':
        // addNewStatus(dataList)
        break
      case 'clay':
        // addNewClay(dataList)
        break
      case 'glaze':
        // addNewGlaze(dataList)
        break
      default:
        dispatch(showError('Sorry I don\'t understand which item is being saved...'))
    }
  }

  return (
    <>
      <div>
        <form onSubmit={submit}>
          {arrOfType.map((obj) => (
            <div key={obj.id} value={obj[name]}>
              {obj[name]}
            </div>
          ))}
          {newInputVisible &&
            <TextField
              label={name}
              variant='outlined'
              size='small'
              id='outlined'
              margin='dense'
              placeholder={`new ${name} option`}
              name={name}
              value={currentAddition}
              onChange={handleChange}
            />
          }
          {newInputVisible
            ? <div>
              <button id={name} className='button is-primary' onClick={save}>Save</button>
              <button className='button is-primary' onClick={showAddInput}>X</button>
            </div>
            : <button className='button is-primary' onClick={showAddInput}>+</button>
          }
        </form>
      </div>
    </>
  )
}

export default DataOption
