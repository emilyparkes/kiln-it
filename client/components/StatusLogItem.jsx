import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StatusModal from './StatusModal'

const statuses = ['Wet', 'Leather Hard', 'Bone Dry', 'Bisque Firing', 'Bisque Fired', 'Glazed', 'Glaze Firing', 'Complete']

export default function StatusLogItem ({ creation }) {
  const [show, setShowModel] = useState(false)
  const [currentStatus, setStatus] = useState(creation.status)

  const style = currentStatus.toLowerCase().replace(/\s/g, '-')
  const date = creation.date_complete || creation.date_created
  const formattedDate = new Date(date).toDateString()

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
    setStatus(e.target.value)
  }

  const onSubmit = (e) => {
    // e.preventDefault()
    hideModal()
    // sendForm(form)
  }

  return (
    <>
      {show
        ? <main className='main edit'>
          <StatusModal show={show} save={onSubmit} close={hideModal}>
            <div className='current'>
              <p>Selected</p>
              <p className={`status ${style}`}>
                {currentStatus}
              </p>
            </div>
            <div className='statusList'>
              {statuses.map((status) => {
                const styleItem = status.toLowerCase().replace(/\s/g, '-')

                return <button className={`status ${styleItem}`}
                  key={status} value={status}
                  onClick={handleSelect}>
                  {status}
                </button>
              })}
            </div>
          </StatusModal>
        </main>
        : null}

      <div className='item'>
        <div className={`status ${style}`}
          onClick={showModal}>
          {currentStatus}
        </div>

        <Link to='/creations/le-vase'>
          <div className='log-box' key={creation.id}>

            <img className='log-img'
              src='/images/plate.jpeg'/>

            {/* <div className='info'> */}
            <table className='info'>
              <tbody >
                <tr>
                  <td className='width info-shape'>{creation.shape}</td>
                  <td className='width'>Name: {creation.name}</td>
                </tr>
                <tr>
                  <td className='width'>{creation.clay} Clay</td>
                  <td className='width'>{creation.glaze} Glaze</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    Made on {formattedDate}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}

          </div>
        </Link>

      </div>
    </>
  )
}
