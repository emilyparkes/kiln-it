import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import { showError } from '../actions/error'
import { createClay, removeClay } from '../actions/clay'
import { createGlazes, removeGlaze } from '../actions/glazes'
import { createShapes, removeShape } from '../actions/shapes'
import { createStatuses, removeStatus } from '../actions/statuses'

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

  const handleRemove = (el) => {
    const updatedList = dataList.filter(item => item !== el)
    setDataList(updatedList)
  }

  const deleteItem = (id) => {
    switch (name) {
      case 'shape':
        dispatch(removeShape(id))
        break
      case 'status':
        dispatch(removeStatus(id))
        break
      case 'clay':
        dispatch(removeClay(id))
        break
      case 'glaze':
        dispatch(removeGlaze(id))
        break
      default:
        dispatch(showError('Sorry I don\'t understand which item is being deleted...'))
    }
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
        dispatch(createShapes(dataList))
        break
      case 'status':
        dispatch(createStatuses(dataList))
        break
      case 'clay':
        dispatch(createClay(dataList))
        break
      case 'glaze':
        dispatch(createGlazes(dataList))
        break
      default:
        dispatch(showError('Sorry I don\'t understand which item is being saved...'))
    }
    setDataList([])
  }

  return (
    <>
      <div>
        {console.log(arrOfType)}
        {arrOfType.map((type) => (
          <div key={type.id} value={type[name]}>
            {type[name]}
            <button onClick={() => deleteItem(type.id)}>
              x
            </button>
          </div>
        ))}

        {newInputVisible &&
            <div>
              <p>Things to add:</p>
              <div>
                {dataList.map(el => {
                  return <div key={el}>
                    <p>{el}</p>
                    <button onClick={() => handleRemove(el)}>remove</button>
                  </div>
                })}
              </div>
            </div>}

        <form onSubmit={submit}>
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
            <button id={name} onClick={save}>Save</button>
            <button onClick={showAddInput}>X</button>
          </div>
          : <button onClick={showAddInput}>+</button>
        }
      </div>
    </>
  )
}

export default DataOption
