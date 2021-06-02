import React, { useState } from 'react'

import { TextField } from '@material-ui/core'
import { showError } from '../actions/error'
import { addNewShape, addNewStatus, addNewClay, addNewGlaze } from '../apis/dataOptions'

function DataOption ({ name, arrOfType, dispatch }) {
  const [dataList, setDataList] = useState([])
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
    setCurrentAddition('')
  }

  const save = (e) => {
    setNewInputVisible(!newInputVisible)
    switch (name) {
      case 'shape':
        addNewShape(dataList)
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
    setDataList([])
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
        <div>
          <p>Things to add:</p>
          <ul>
            {dataList.map(el => <li key={el}>{el}</li>)}
          </ul>
        </div>}

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
        </form>

        {newInputVisible
          ? <div>
            <button id={name} className='button is-primary' onClick={save}>Save</button>
            <button className='button is-primary' onClick={showAddInput}>X</button>
          </div>
          : <button className='button is-primary' onClick={showAddInput}>+</button>
        }
      </div>
    </>
  )
}

export default DataOption
