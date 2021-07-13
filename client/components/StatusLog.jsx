import React from 'react'
import { connect } from 'react-redux'

import { filterBy } from '../client-utils'

import StatusLogItem from './StatusLogItem'
import { updateCreation } from '../apis/creations'

function StatusLog ({ creations, history }) {
  return (
    <>
      {creations && (
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
      )}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    creations: filterBy(store.filter, store.creations)

  }
}

export default connect(mapStateToProps)(StatusLog)
