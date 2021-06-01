import React, { useState } from 'react'

import { showError } from '../actions/error'
// import { addNewShape, addNewStatus, addNewClay, addNewGlaze } from '../apis/dataOptions'

function DataOption ({ name, arrOfType, dispatch }) {
  const [dataList, setDataList] = useState(null)
  const [currentAddition, setCurrentAddition] = useState('')
  const [newInputVisible, setNewInputVisible] = useState(false)

  const showAddInput = () => {
    setNewInputVisible(true)
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
      <form onSubmit={submit}>
        {arrOfType.map((obj) => (
          <div key={obj.id} value={obj[name]}>
            {obj[name]}
          </div>
        ))}
        {newInputVisible && <p>
          <input type='text'
            placeholder='New Shape name'
            name={name}
            value={currentAddition}
            onChange={handleChange}
          />
        </p>}
        {
          newInputVisible
            ? <button id='' className='button is-primary' onClick={save}>Save</button>
            : <button className='button is-primary' onClick={showAddInput}>+</button>
        }
      </form>
    </>
  )
}

export default DataOption
