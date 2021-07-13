import React from 'react'
import { connect } from 'react-redux'

import DataOption from './DataOption'

function AddDataOptions ({ clay, glazes, shapes, statuses, dispatch }) {
  // const addItem = () => {

  // }

  // const delItem = () => {

  // }

  return (
    <>
      { (statuses && clay && glazes && shapes) &&
        <div className='container'>
          <h3 className='pg-title heading'>Manage options</h3>
          <div className='options'>
            <DataOption name='clay' arrOfType={clay} dispatch={dispatch}/>
            <DataOption name='glaze' arrOfType={glazes} dispatch={dispatch}/>
            <DataOption name='shape' arrOfType={shapes} dispatch={dispatch}/>
            <DataOption name='status' arrOfType={statuses} dispatch={dispatch}/>
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
