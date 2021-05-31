import React from 'react'
import { connect } from 'react-redux'

import StatusLogItem from './StatusLogItem'
import { updateCreation } from '../apis/creations'

function StatusLog ({ creations, history }) {
  return (
    <>
      {creations ? (
        <div className='log-container'>
          {creations.map((creation) => {
            return (
              <StatusLogItem key={creation.id}
                creation={creation}
                updateCreation={updateCreation}
                history={history}/>
            )
          })}
        </div>
      ) : null}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    creations: store.all.creations
  }
}

export default connect(mapStateToProps)(StatusLog)
