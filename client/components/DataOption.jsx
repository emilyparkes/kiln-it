import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import DataOptionItem from './DataOptionItem'

import { showError } from '../actions/error'
import { createClay, removeClay } from '../actions/clay'
import { createGlazes, removeGlaze } from '../actions/glazes'
import { createShapes, removeShape } from '../actions/shapes'
import { createStatuses, removeStatus } from '../actions/statuses'

import { toCapSpace } from '../client-utils'

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

  const renderEditView = (type) => {
    return <DataOptionItem
      key={type.id}
      type={type}
      name={name}
      deleteItem={deleteItem}/>
  }

  const renderReadView = (type) => {
    return <div className='text-item' key={type.id} value={type[name]}>
      {type[name]}
    </div>
  }

  return (
    <>
      <div className='option-block'>
        <h4 className='option sml-mar heading'>{ toCapSpace(name) }</h4>

        {editVisible
          ? <button className='option-btn option-btn--close' onClick={showEditable}>Close</button>
          : <button className='option-btn option-btn--edit' onClick={showEditable}>Edit</button>
        }

        <div className='break-line'></div>

        { editVisible
          ? <div className='edit'>
            <div className='details'>
              {arrOfType.map((type) => renderEditView(type))}

              {newInputVisible &&
              <div>
                {dataList.map(el => {
                  return <div key={el}>
                    <TextField
                      key={el}
                      name={el}
                      value={el}
                      onChange={handleChange}
                    />
                    <button className='option-btn option-btn--undo' onClick={() => handleRemove(el)}>Undo</button>
                  </div>
                })}
                {dataList.length >= 1 && <button className='option-btn option-btn--save' id={name} onClick={save}>Save</button>}
              </div>}

              <form onSubmit={submit}>
                {newInputVisible &&
                  <TextField
                    key={name}
                    name={name}
                    placeholder={`new ${name}`}
                    value={currentAddition}
                    onChange={handleChange}
                  />
                }
              </form>

            </div>
          </div>
          : <div className='read'>
            <div className='details'>
              {arrOfType.map((type) => renderReadView(type))}
            </div>
          </div>
        }

        {editVisible &&
          <div className='option-add'>
            {newInputVisible
              ? <button className='option-btn option-btn--minus' onClick={() => setNewInputVisible(false)}> - </button>
              : <button className='option-btn option-btn--plus' onClick={() => setNewInputVisible(true)}> + </button>}
          </div>
        }

      </div>
    </>
  )
}

export default DataOption
