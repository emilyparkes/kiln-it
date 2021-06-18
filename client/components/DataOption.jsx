import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import DataOptionItem from './DataOptionItem'

import { showError } from '../actions/error'
import { createClay, removeClay } from '../actions/clay'
import { createGlazes, removeGlaze } from '../actions/glazes'
import { createShapes, removeShape } from '../actions/shapes'
import { createStatuses, removeStatus } from '../actions/statuses'

function DataOption ({ name, arrOfType, dispatch }) {
  const [dataList, setDataList] = useState([])
  const [currentAddition, setCurrentAddition] = useState('')
  const [newInputVisible, setNewInputVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)

  const showEditable = () => {
    if (newInputVisible) {
      clear()
    } else {
      setEditVisible(!editVisible)
    }
  }

  const clear = () => {
    setEditVisible(false)
    setNewInputVisible(false)
    setDataList([])
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
    clear()
  }

  const renderEditable = (type) => {
    return <DataOptionItem
      key={type.id}
      type={type}
      name={name}
      deleteItem={deleteItem}/>
  }

  const renderView = (type) => {
    return <div
      key={type.id}
      value={type[name]}>
      {type[name]}
    </div>
  }

  return (
    <>
      <div>
        {/* <InputLabel htmlFor="my-input">{ name }</InputLabel> */}
        {arrOfType.map((type) => (
          editVisible
            ? renderEditable(type)
            : renderView(type)

        ))}
        {editVisible && <button onClick={setNewInputVisible}>+</button>}

        {newInputVisible &&
            <div>
              <p>Things to add:</p>
              <div>
                {dataList.map(el => {
                  return <div key={el}>
                    <p>{el}</p><button onClick={() => handleRemove(el)}>Undo</button>
                  </div>
                })}
                {dataList.length >= 1 && <button id={name} onClick={save}>Save</button>}
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

        {editVisible
          ? <button onClick={showEditable}>Close</button>
          : <button onClick={showEditable}>Edit</button>
        }
      </div>
    </>
  )
}

export default DataOption
