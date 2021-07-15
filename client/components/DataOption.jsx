import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { VscEdit } from 'react-icons/vsc'
import { IoAddCircleSharp, IoCheckmarkDoneSharp } from 'react-icons/io5'
import { AiFillMinusCircle } from 'react-icons/ai'

import DataOptionItem from './DataOptionItem'

import { showError } from '../actions/error'
import { createClay, removeClay } from '../actions/clay'
import { createGlazes, removeGlaze } from '../actions/glazes'
import { createShapes, removeShape } from '../actions/shapes'
import { createStatuses, removeStatus } from '../actions/statuses'

import { toCapSpace } from '../client-utils'

function DataOption ({ name, arrOfType, dispatch }) {
  const [currentAddition, setCurrentAddition] = useState('')
  const [newInputVisible, setNewInputVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)

  const showEditable = () => {
    setEditVisible(!editVisible)
    clear()
  }

  const clear = () => {
    setCurrentAddition('')
  }

  const handleChange = (e) => {
    setCurrentAddition(e.target.value)
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
    clear()
  }

  const save = (e) => {
    e.preventDefault()
    switch (name) {
      case 'shape':
        dispatch(createShapes(currentAddition))
        break
      case 'status':
        dispatch(createStatuses(currentAddition))
        break
      case 'clay':
        dispatch(createClay(currentAddition))
        break
      case 'glaze':
        dispatch(createGlazes(currentAddition))
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
          ? <IoCheckmarkDoneSharp className='option-btn option-btn--close' onClick={showEditable} />
          : <VscEdit className='option-btn option-btn--edit' onClick={showEditable} />
        }

        <div className='break-line'></div>

        { editVisible
          ? <div className='edit'>
            <div className='details'>
              {arrOfType.map((type) => renderEditView(type))}

              <form onSubmit={save}>
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
              ? <AiFillMinusCircle className='option-btn option-btn--minus' onClick={() => setNewInputVisible(false)} />
              : <IoAddCircleSharp className='option-btn option-btn--plus' onClick={() => setNewInputVisible(true)}/>
            }
          </div>
        }

      </div>
    </>
  )
}

export default DataOption
