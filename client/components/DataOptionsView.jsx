import React from 'react'
import { useSelector } from 'react-redux'

import DataOption from './DataOption'

function AddDataOptions () {

const clay = useSelector(store => store.clay)
const glazes = useSelector(store => store.glazes)
const shapes = useSelector(store => store.shapes)
const statuses = useSelector(store => store.statuses)

  return (
    <>
      { (statuses && clay && glazes && shapes) &&
        <div className='container'>
          <h3 className='pg-title heading'>Manage options</h3>
          <div className='options'>
            <DataOption name='clay' arrOfType={clay} dispatch={dispatch} />
            <DataOption name='glaze' arrOfType={glazes} dispatch={dispatch} />
            <DataOption name='shape' arrOfType={shapes} dispatch={dispatch} />
            <DataOption name='status' arrOfType={statuses} dispatch={dispatch} />
          </div>
        </div>
      }
    </>
  )
}

export default AddDataOptions
