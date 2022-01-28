import React from 'react'
import { connect } from 'react-redux'

import NavUtils from './nav-utils/NavUtils'
import StatusLogItem from './StatusLogItem'
import { updateCreation } from '../apis/creations'
import { filterBy } from '../client-utils'

function StatusLog ({ creations, history }) {
  return (
    <>
      <NavUtils/>
      {creations?.length ? (
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
      )
        : 'Sorry nothing for you'
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    creations: filterBy(store.filter, store.creations)
  }
}

export default connect(mapStateToProps)(StatusLog)
