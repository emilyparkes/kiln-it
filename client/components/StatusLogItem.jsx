import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { findString } from '../utils'
import StatusModal from './StatusModal'

function StatusLogItem ({ all, creation, updateCreation, history }) {
  const [show, setShowModel] = useState(false)
  const [statusStyle, setStatusStyle] = useState('')
  const [currentStatus, setStatus] = useState({})

  const style = statusStyle.toLowerCase().replace(/\s/g, '-')
  const date = creation.dateComplete || creation.dateCreated
  const formattedDate = new Date(date).toDateString()

  useEffect(() => {
    setStatusStyle(findString(all.statuses, creation.statusId, 'status'))
    setStatus(findString(all.statuses, creation.statusId))
  }, [])

  useEffect(() => {
    show
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = ''
  }, [show, currentStatus])

  const showModal = () => {
    setShowModel(true)
  }

  const hideModal = () => {
    setShowModel(false)
  }

  const handleSelect = (e) => {
    const selected = all.statuses.find(obj => obj.status === e.target.value)
    setStatus(selected)
    setStatusStyle(e.target.value)
  }

  const onSubmit = (e) => {
    // e.preventDefault()
    hideModal()
    creation.status = currentStatus.id
    const updatedCreation = { ...creation }
    console.log(updatedCreation)
    updateCreation(updatedCreation)
    history.push('/log')
  }

  return (
    <>
      {show
        ? <main className='main edit'>
          <StatusModal show={show} save={onSubmit} close={hideModal}>
            <div className='current'>
              <p>Selected</p>
              <p className={`status ${style}`}>
                {currentStatus.status}
              </p>
            </div>
            <div className='statusList'>
              {all.statuses ? all.statuses.map((statusobj) => {
                const styleItem = statusobj.status.toLowerCase().replace(/\s/g, '-')

                return <button className={`status ${styleItem}`}
                  key={statusobj.id} value={statusobj.status}
                  onClick={handleSelect}>
                  {statusobj.status}
                </button>
              })
                : 'no statuses found'}
            </div>
          </StatusModal>
        </main>
        : null}

      { all
        ? <div className='item'>
          <div className={`status ${style}`}
            onClick={showModal}>
            {currentStatus.status}
          </div>

          <Link to='/creations/le-vase'>
            <div className='log-box' key={creation.id}>

              <img className='log-img'
                src='/images/plate.jpeg'/>

              <table className='info'>
                <tbody >
                  <tr>
                    <td className='width info-shape'>{findString(all.shapes, creation.shapeId, 'shape')}</td>
                    <td className='width'>Name: {creation.name}</td>
                  </tr>
                  <tr>
                    <td className='width'>{findString(all.clay, creation.clayId, 'clay')} Clay</td>
                    <td className='width'>{findString(all.glazes, creation.glazeId, 'glaze')} Glaze</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                    Made on {formattedDate}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Link>

        </div>
        : 'Sorry, I couldn\'t load data...'}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    all: store.all
  }
}

export default connect(mapStateToProps)(StatusLogItem)
