import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { TextField, MenuItem, InputAdornment } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { brown } from '@mui/material/colors'
import { IoLogoInstagram } from 'react-icons/io'
import { VscSaveAs } from 'react-icons/vsc'

import { useEditStyles } from '../styles/mui_overrides'
import { patchCreation } from '../apis/creations'
import { findString, toLowHyphen, toCapSpace } from '../client-utils'

function CreationEdit({ history }) {
  const classes = useEditStyles()
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [form, setForm] = useState(null)

  // HARD CODED FOR NOW
  const images = [
    '/images/plate.jpeg',
    '/images/vase.png',
    '/images/plate.jpeg',
    '/images/vase.png',
    '/images/plate.jpeg',
  ]
  //
  const theme = createTheme({
    palette: {
      primary: brown,
    },
  })

  const params = useParams()

  const creations = useSelector((store) => store.creations)
  const clay = useSelector((store) => store.clay)
  const glazes = useSelector((store) => store.glazes)
  const shapes = useSelector((store) => store.shapes)
  const statuses = useSelector((store) => store.statuses)

  useEffect(() => {
    if (creations) {
      const name = toCapSpace(params.name)
      const creation = findString(creations, 'name', name)
      setForm(creation)
    }
  }, [creations])

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

  const onSubmit = (e) => {
    e.preventDefault()
    delete form.clay
    delete form.shape
    delete form.glaze
    delete form.status
    patchCreation(form)
    const newName = toLowHyphen(form.name)
    history.push(`/creations/${newName}`)
  }

  return (
    <>
      {form && creations && (
        <form>
          <div className='creation-container edit'>
            <img className='creation-img' src={currentImg} />

            <div className='icon-dots'>
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

            <div className='text-card'>
              <div className='text-card-content'>
                <div className={classes.root}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      label='Name'
                      className={classes.name}
                      variant='outlined'
                      size='small'
                      id='outlined-name'
                      margin='dense'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                    />

                    <TextField
                      label='Shape'
                      className={classes.textField}
                      variant='outlined'
                      size='small'
                      id='outlined-shape'
                      margin='dense'
                      select
                      name='shape'
                      value={form.shape}
                      onChange={handleChange}
                    >
                      {shapes.map((obj) => (
                        <MenuItem key={obj.id} value={obj.shape}>
                          {obj.shape}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label='Status'
                      className={classes.textField}
                      variant='outlined'
                      size='small'
                      id='outlined-status'
                      margin='dense'
                      select
                      name='status'
                      value={form.status}
                      onChange={handleChange}
                    >
                      {statuses.map((obj) => (
                        <MenuItem key={obj.id} value={obj.status}>
                          {obj.status}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label='Clay'
                      className={classes.textField}
                      variant='outlined'
                      size='small'
                      id='outlined-clay'
                      margin='dense'
                      select
                      name='clay'
                      value={form.clay}
                      onChange={handleChange}
                    >
                      {clay.map((obj) => (
                        <MenuItem key={obj.id} value={obj.clay}>
                          {obj.clay}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label='Weight'
                      className={classes.textField}
                      variant='outlined'
                      size='small'
                      id='outlined-weight'
                      margin='dense'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>g</InputAdornment>
                        ),
                      }}
                      name='weight'
                      value={form.weight}
                      onChange={handleChange}
                    />

                    <TextField
                      label='Glaze'
                      variant='outlined'
                      size='small'
                      id='outlined-glaze'
                      margin='dense'
                      select
                      fullWidth
                      name='glaze'
                      value={form.glaze}
                      onChange={handleChange}
                    >
                      {glazes.map((obj) => (
                        <MenuItem key={obj.id} value={obj.glaze}>
                          {obj.glaze}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label='Makers Note'
                      variant='outlined'
                      size='small'
                      id='outlined-makers-note'
                      margin='dense'
                      multiline
                      rows={5}
                      fullWidth
                      name='makersNote'
                      value={form.makersNote}
                      onChange={handleChange}
                    />

                    <TextField
                      label='Description'
                      variant='outlined'
                      size='small'
                      id='outlined-multiline-static'
                      margin='dense'
                      multiline
                      rows={8}
                      fullWidth
                      name='description'
                      value={form.description}
                      onChange={handleChange}
                    />

                    <p className='date'>March 12 2021</p>
                  </ThemeProvider>
                </div>
              </div>
            </div>
            <a href='https://www.instagram.com/emily_coco/'>
              <IoLogoInstagram className='icon-instagram' />
            </a>
            <VscSaveAs className='icon-save' onClick={onSubmit} />
          </div>
        </form>
      )}
    </>
  )
}

export default CreationEdit
