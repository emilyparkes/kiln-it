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
            <DataOption name='clay' arrOfType={clay} />
            <DataOption name='glaze' arrOfType={glazes} />
            <DataOption name='shape' arrOfType={shapes} />
            <DataOption name='status' arrOfType={statuses} />
          </div>
        </div>
      }
    </>
  )
}

export default AddDataOptions
