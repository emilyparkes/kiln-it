import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { useParams, useNavigate } from 'react-router-dom'

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
import {
  SaveRounded as SaveIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material'
import { brown } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useStyles } from '../styles/mui_overrides'

import { Creation } from '../../models/Creation'
import { updateCreation } from '../actions/creations'
import { findString, toLowHyphen, toCapSpace } from '../client-utils'


function CreationEdit() {
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [form, setForm] = useState({} as Partial<Creation>)
  const [selectedGlaze, setSelectedGlaze] = useState([] as any[])

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

  const params = useParams()
  const classes = useStyles()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const creations = useAppSelector((store) => store.creations)
  const clay = useAppSelector((store) => store.clay)
  const storeGlazes = useAppSelector((store) => store.glazes)
  const shapes = useAppSelector((store) => store.shapes)
  const statuses = useAppSelector((store) => store.statuses)

  useEffect(() => {
    if (creations.length > 0 && storeGlazes) {
      const name = toCapSpace(params.name)
      const creation = findString(creations, 'name', name)
      setForm(creation)

      const copyGlazes = [...storeGlazes]
      const prettyState = copyGlazes.filter((glazeObj) => {
        return creation.glazes.find((glaze) => glaze.id === glazeObj.id)
      })
      setSelectedGlaze(prettyState)
    }
  }, [creations, storeGlazes])

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
    delete form.clay
    delete form.shape
    delete form.glaze
    delete form.status
    const formattedGlazes = selectedGlaze.map((selected) => {
      if (selected.in_use) {
        delete selected.in_use
        delete selected.underglaze
      }
      return selected
    })
    form.glazes = formattedGlazes
    dispatch(updateCreation(form))
    const newName = toLowHyphen(form.name)
    navigate(`/creations/${newName}`)
  }

  return (
    <>
      {form && creations && (
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
                      // className={classes.titleLabel}
                      variant="outlined"
                      size="small"
                      id="outlined-name"
                      margin="dense"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />

                    {shapes && (
                      <TextField
                        label="Shape"
                        // className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-shape"
                        margin="dense"
                        select
                        name="shape"
                        value={form.shape}
                        onChange={handleChange}
                      >
                        {shapes.map((obj) => (
                          <MenuItem key={obj.id} value={obj.shape}>
                            {obj.shape}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    {statuses && (
                      <TextField
                        label="Status"
                        // className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-status"
                        margin="dense"
                        select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                      >
                        {statuses.map((obj) => (
                          <MenuItem key={obj.id} value={obj.status}>
                            {obj.status}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    {clay && (
                      <TextField
                        label="Clay"
                        // className={classes.inputLabel}
                        variant="outlined"
                        size="small"
                        id="outlined-clay"
                        margin="dense"
                        select
                        name="clay"
                        value={form.clay}
                        onChange={handleChange}
                      >
                        {clay.map((obj) => (
                          <MenuItem key={obj.id} value={obj.clay}>
                            {obj.clay}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}

                    <TextField
                      label="Weight"
                      // className={classes.inputLabel}
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
                          // className={classes.multiSelect}
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
                      rows={5}
                      fullWidth
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                    />

                    <TextField
                      label="Description"
                      variant="outlined"
                      size="small"
                      id="outlined-description"
                      margin="dense"
                      multiline
                      rows={7}
                      fullWidth
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                    />

                    <div className="date">March 12 2021</div>
                  </ThemeProvider>
                </div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/emily_coco/"
              className="icon-instagram"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <Button
              variant="contained"
              // className={classes.saveButton}
              onClick={onSubmit}
              endIcon={<SaveIcon fontSize="large" />}
            >
              Save Changes
            </Button>
          </div>
        </form>
      )}
    </>
  )
}

export default CreationEdit
