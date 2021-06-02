import React from 'react'
import { connect } from 'react-redux'

import DataOption from './DataOption'

function AddDataOptions ({ all, dispatch }) {
  return (
    <>
      { all &&
        <div className='container edit'>
          <div >
            <DataOption name='clay' arrOfType={all.clay} dispatch={dispatch}/>
            <DataOption name='glaze' arrOfType={all.glazes} dispatch={dispatch}/>
            <DataOption name='shape' arrOfType={all.shapes} dispatch={dispatch}/>
            <DataOption name='status' arrOfType={all.statuses} dispatch={dispatch}/>
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    clay: store.clay,
    glazes: store.glazes,
    shapes: store.shapes,
    statuses: store.statuses
  }
}

export default connect(mapStateToProps)(AddDataOptions)
