import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  TextField,
  MenuItem,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Checkbox,
  ListItemText,
  Select,
  FormControl,
  Button,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { brown } from '@mui/material/colors'
import { SaveRounded as SaveIcon } from '@mui/icons-material'

import { useStyles } from '../styles/mui_overrides'
import { createCreation } from '../actions/creations'
import {
  toLowHyphen,
  cleanGlazes,
  validateForm,
  cleanForm,
} from '../client-utils'

function NewCreation() {
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [formError, setFormError] = useState({})

  const [form, setForm] = useState({
    name: '',
    shape: '',
    status: '',
    clay: '',
  })
  const [selectedGlaze, setSelectedGlaze] = useState([])

  // HARD CODED FOR NOW
  const images = [
    '/images/plate.jpeg',
    '/images/vase.png',
    '/images/plate.jpeg',
    '/images/vase.png',
    '/images/plate.jpeg',
  ]

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const theme = createTheme({
    palette: {
      primary: brown,
    },
  })

  const classes = useStyles()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const creations = useAppSelector((store) => store.creations)
  const clay = useAppSelector((store) => store.clay)
  const storeGlazes = useAppSelector((store) => store.glazes)
  const shapes = useAppSelector((store) => store.shapes)
  const statuses = useAppSelector((store) => store.statuses)

  useEffect(() => {
    setCurrentImage(images[imgIdx])
  }, [imgIdx])

  const getImage = (idx) => {
    setImgIdx(idx)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const selectGlaze = (event) => {
    setForm({
      ...form,
      glazes: event.target.value,
    })
    setSelectedGlaze(event.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    const hasErrors = validateForm(form)
    if (hasErrors) {
      setFormError(hasErrors)
    } else {
      const newCreation = cleanForm(form)
      newCreation.glazes = cleanGlazes(selectedGlaze)
      dispatch(createCreation(newCreation))
      const newName = toLowHyphen(newCreation.name)
      navigate(`/creations/${newName}`)
    }
  }

  return (
    <>
      {creations && (
        <form>
          <div className="creation-container edit">
            <img className="creation-img" src={currentImg} />

            <div className="icon-dots">
              {images.map((dot, idx) => {
                return (
                  <div
                    key={idx}
                    className={imgIdx === idx ? 'dot selected' : 'dot'}
                    id={idx}
                    onClick={() => getImage(idx)}
                  ></div>
                )
              })}
            </div>

            <div className="text-card">
              <div className="text-card-content">
                <div className={classes.box}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      label="Name"
                      className={classes.titleLabelWide}
                      variant="outlined"
                      size="small"
                      id="outlined-name"
                      margin="dense"
                      name="name"
                      value={form.name}
                      required
                      error={formError.nameInput ? true : false}
                      helperText={
                        formError.nameInput ? 'Name is required.' : ''
                      }
                      onChange={handleChange}
                    />

                    {shapes && (
                      <TextField
                        label="Shape"
                        className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-shape"
                        margin="dense"
                        select
                        required
                        error={formError.shapeInput ? true : false}
                        helperText={
                          formError.shapeInput ? 'Shape is required.' : ''
                        }
                        name="shape"
                        value={form.shape}
                        onChange={handleChange}
                      >
                        {shapes.map((shapeObj) => (
                          <MenuItem key={shapeObj.id} value={shapeObj}>
                            {shapeObj.shape}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    {statuses && (
                      <TextField
                        label="Status"
                        className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-status"
                        margin="dense"
                        select
                        required
                        error={formError.statusInput ? true : false}
                        helperText={
                          formError.statusInput ? 'Status is required.' : ''
                        }
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                      >
                        {statuses.map((statusObj) => (
                          <MenuItem key={statusObj.id} value={statusObj}>
                            {statusObj.status}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    {clay && (
                      <TextField
                        label="Clay"
                        className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-clay"
                        margin="dense"
                        select
                        required
                        error={formError.clayInput ? true : false}
                        helperText={
                          formError.clayInput ? 'Clay is required.' : ''
                        }
                        name="clay"
                        value={form.clay}
                        onChange={handleChange}
                      >
                        {clay.map((clayObj) => (
                          <MenuItem key={clayObj.id} value={clayObj}>
                            {clayObj.clay}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    <TextField
                      label="Weight"
                      className={classes.inputLabel}
                      variant="outlined"
                      size="small"
                      id="outlined-weight"
                      margin="dense"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">g</InputAdornment>
                        ),
                      }}
                      name="weight"
                      value={form.weight}
                      onChange={handleChange}
                    />

                    {storeGlazes && (
                      <FormControl margin="dense">
                        <InputLabel id="demo-multiple-checkbox-label">
                          Glazes
                        </InputLabel>
                        <Select
                          className={classes.multiSelect}
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={selectedGlaze}
                          onChange={selectGlaze}
                          input={<OutlinedInput label="Glazes" />}
                          renderValue={() => {
                            const glazeStrings = selectedGlaze.map(
                              (selected) => selected.glaze
                            )
                            if (!selectedGlaze.length) {
                              return 'Unglazed'
                            } else {
                              return glazeStrings.join(', ')
                            }
                          }}
                          MenuProps={MenuProps}
                        >
                          {storeGlazes.map((glazeObj) => {
                            const underglaze = glazeObj.underglaze
                              ? 'underglaze'
                              : '-'
                            const selectedIds = selectedGlaze.map(
                              (selected) => selected.id
                            )
                            return (
                              <MenuItem key={glazeObj.id} value={glazeObj}>
                                <Checkbox
                                  checked={selectedIds.includes(glazeObj.id)}
                                />
                                <ListItemText
                                  primary={glazeObj.glaze}
                                  secondary={underglaze}
                                />
                              </MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    )}

                    <TextField
                      label="Makers Note"
                      variant="outlined"
                      size="small"
                      id="outlined-makers-note"
                      margin="dense"
                      multiline
                      rows={9}
                      fullWidth
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                    />

                    <div className="date">Today</div>

                    <Button
                      variant="contained"
                      className={classes.saveButton}
                      onClick={onSubmit}
                      endIcon={<SaveIcon fontSize="large" />}
                    >
                      Save Creation
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default NewCreation
