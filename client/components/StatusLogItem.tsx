import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
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
import { toCamelCase, toLowHyphen } from '../client-utils'
import { updateCreationStatus } from '../actions/creations'
import { useStyles } from '../styles/mui_overrides'

export default function StatusLogItem({ creation }) {
  const initialState = { id: creation.statusId, status: creation.status }

  const [show, setShowModel] = useState(false)
  const [statusStyle, setStatusStyle] = useState(creation.status)
  const [currentStatus, setStatus] = useState(initialState)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {classes} = useStyles()

  const statuses = useAppSelector((store) => store.statuses)

  const style = toCamelCase(statusStyle)
  // const date = creation.dateComplete || creation.dateCreated
  // const formattedDate = new Date(date).toDateString()

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

  const formatGlazeText = (selectedGlaze) => {
    const glazeStrings = selectedGlaze.map((selected) => selected.glaze)
    if (!selectedGlaze.length) {
      return 'Unglazed'
    } else {
      return glazeStrings.join(', ')
    }
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
              <p className={classes[`${style}`]}>{currentStatus.status}</p>
            </div>
            <div className="statusList">
              {statuses
                ? statuses.map((statusobj) => {
                    const styleItem = toCamelCase(statusobj.status)

                    return (
                      <button
                        className={classes[`${styleItem}`]}
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

      {statuses && (
        <Card
          sx={{
            display: 'flex',
            height: '145px',
            //     width: '100%',
            backgroundColor: '#744f44',
            //     overflow: 'hidden',
            //     boxShadow: [
            //       '0px 2px 1px -1px rgba(0, 0, 0, 0.2)',
            //       '0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
            //       '0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
            //     ],
            borderRadius: '4px',
            margin: '2px 10px 8px 10px',
          }}
        >
          <Link to={`/creations/${toLowHyphen(creation.name)}`}>
            <CardMedia
              component="img"
              // sx={{ width: 151 }}
              image="/images/plate.jpeg"
              alt="text tdb"
              sx={{
                width: '139.95px',
                height: '144.65px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
          </Link>
          <Box sx={{ display: 'flex', width: 1 }}>
            <CardContent
              sx={{
                display: 'flex',
                padding: '0px 3px 0px 0px',
                top: '40px',
                alignontent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                color: 'whitesmoke',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: '80%',
                  fontWeight: '200',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  margin: '8px',
                  padding: '6px 16px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                }}
                color={`${style}`}
                onClick={showModal}
              >
                {currentStatus.status}
              </Button>
              <Stack spacing={1} sx={{ paddingLeft: '10px' }}>
                <Typography variant="p">
                  {creation.shape}: {creation.name}
                </Typography>
                <Typography variant="p">Clay: {creation.clay}</Typography>
                <Typography variant="p">
                  Glazes: {formatGlazeText(creation?.glazes)}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  )
}