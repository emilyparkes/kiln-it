import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Typography,
  Stack,
} from '@mui/material'

import StatusModal from './StatusModal'
import { toCamelCase } from '../client-utils'
import { updateCreationStatus } from '../actions/creations'
import { useStyles } from '../styles/mui_overrides'

function StatusLogItem({ creation }) {
  const initialState = { id: creation.statusId, status: creation.status }

  const [show, setShowModel] = useState(false)
  const [statusStyle, setStatusStyle] = useState(creation.status)
  const [currentStatus, setStatus] = useState(initialState)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const classes = useStyles()

  const statuses = useSelector((store) => store.statuses)

  const style = toCamelCase(statusStyle)
  const date = creation.dateComplete || creation.dateCreated
  const formattedDate = new Date(date).toDateString()

  useEffect(() => {
    show
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')
  }, [show, currentStatus])

  const showModal = () => {
    setShowModel(true)
  }

  const hideModal = () => {
    setShowModel(false)
  }

  const handleSelect = (e) => {
    const selected = statuses.find((obj) => obj.status === e.target.value)
    setStatusAndStyle(selected, e.target.value)
  }

  const setStatusAndStyle = (status, styleValue) => {
    setStatus(status)
    setStatusStyle(styleValue)
  }

  const onSubmit = () => {
    // e.preventDefault()
    hideModal()
    // delete creation.clay
    // delete creation.shape
    // delete creation.glaze
    creation.status = currentStatus.status
    creation.statusId = currentStatus.id
    const updatedCreation = { ...creation }
    dispatch(updateCreationStatus(updatedCreation))
    navigate('/log')
  }

  return (
    <>
      {show && (
        <main className="main edit">
          <StatusModal
            show={show}
            save={onSubmit}
            close={hideModal}
            resetState={() =>
              setStatusAndStyle(initialState, initialState.status)
            }
          >
            <div className="current">
              <p>Selected</p>
              <p className={`status ${style}`}>{currentStatus.status}</p>
            </div>
            <div className="statusList">
              {statuses
                ? statuses.map((statusobj) => {
                    const styleItem = toCamelCase(statusobj.status)

                    return (
                      <button
                        className={`status ${styleItem}`}
                        key={statusobj.id}
                        value={statusobj.status}
                        onClick={handleSelect}
                      >
                        {statusobj.status}
                      </button>
                    )
                  })
                : 'no statuses found'}
            </div>
          </StatusModal>
        </main>
      )}

      {statuses ? (


        <Card sx={{ display: 'flex' }} className={classes.StatusLogItemCard}>
          <Link to="/creations/le-vase">
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="/images/plate.jpeg"
              alt="text tdb"
              className={classes.logImg}
            />
          </Link>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <CardContent className={classes.StatusLogItemCardContent}>
              <Button className={classes[`${style}`]} onClick={showModal}>
                {currentStatus.status}
              </Button>
              <Stack spacing={1} sx={{paddingLeft: '10px'}}>
                <Typography>
                  {creation.shape}: {creation.name}
                </Typography>
                <Typography>Clay: {creation.clay}</Typography>
                <Typography>
                  Glazes: {creation.glazes.map((glazeObj) => glazeObj.glaze)}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      ) : (
        'Sorry, I could not load data...'
      )}
    </>
  )
}

export default StatusLogItem
