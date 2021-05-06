import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { TextField, MenuItem, InputAdornment } from '@material-ui/core'
import { IoLogoInstagram } from 'react-icons/io'
import { VscSaveAs } from 'react-icons/vsc'

import { useEditStyles } from '../styles/mui_overrides'
import { getCreationById } from '../apis/api'

export default function CreationEdit () {
  const classes = useEditStyles()
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [form, setForm] = useState(null)

  // HARD CODED FOR NOW
  const shapes = ['Vase', 'Mug', 'Plate', 'Bowl', 'Artistic']
  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']
  const statuses = ['Leather Hard', 'Wet', 'Glazed', 'Glaze Firing']
  const clays = ['White', 'Red', 'White Speckle']
  const glazes = ['Black Matte', 'White', 'White Speckle']
  //

  useEffect(() => {
    getCreationById(1)
      .then((resp) => {
        setForm({
          name: resp.name,
          shape: resp.shape,
          status: resp.status,
          clay: resp.clay,
          weight: resp.weight_complete,
          glaze: resp.glaze,
          makersNote: resp.note,
          description: resp.description
        })
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  useEffect(() => {
    setCurrentImage(images[imgIdx])
  }, [imgIdx])

  const getImage = (idx) => {
    setImgIdx(idx)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // sendForm(form)
  }

  return (
    <>
      {form
        ? <form>
          <div className='creation-container edit'>

            <img className='creation-img'
              src={currentImg} />

            <div className='icon-dots' >
              {images.map((dot, idx) => {
                return <div key={idx}
                  className={imgIdx === idx ? 'dot selected' : 'dot'}
                  id={idx}
                  onClick={() => getImage(idx)}></div>
              })}
            </div>

            <div className='text-card'>
              <div className='text-card-content'>
                <div className={classes.root}>

                  <TextField label='Name'
                    className={classes.name}
                    variant='outlined'
                    size='small'
                    id='outlined-name'
                    margin="dense"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                  />

                  <TextField label='Shape'
                    className={classes.textField}
                    variant='outlined'
                    size='small'
                    id='outlined-shape'
                    margin="dense"
                    select
                    name='shape'
                    value={form.shape}
                    onChange={handleChange}
                  >
                    {shapes.map((shape) => (
                      <MenuItem key={shape} value={shape}>
                        {shape}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Status'
                    className={classes.textField}
                    variant='outlined'
                    size='small'
                    id='outlined-status'
                    margin="dense"
                    select
                    name='status'
                    value={form.status}
                    onChange={handleChange}
                  >
                    {statuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Clay'
                    className={classes.textField}
                    variant='outlined'
                    size='small'
                    id='outlined-clay'
                    margin="dense"
                    select
                    name='clay'
                    value={form.clay}
                    onChange={handleChange}
                  >
                    {clays.map((clay) => (
                      <MenuItem key={clay} value={clay}>
                        {clay}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Weight'
                    className={classes.textField}
                    variant='outlined'
                    size='small'
                    id='outlined-weight'
                    margin="dense"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">g</InputAdornment>
                    }}
                    name='weight'
                    value={form.weight}
                    onChange={handleChange}
                  />

                  <TextField label='Glaze'
                    variant='outlined'
                    size='small'
                    id='outlined-glaze'
                    margin="dense"
                    select
                    fullWidth
                    name='glaze'
                    value={form.glaze}
                    onChange={handleChange}
                  >
                    {glazes.map((glaze) => (
                      <MenuItem key={glaze} value={glaze}>
                        {glaze}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Makers Note'
                    variant='outlined'
                    size='small'
                    id='outlined-makers-note'
                    margin="dense"
                    multiline
                    rows={5}
                    fullWidth
                    name='makersNote'
                    value={form.makersNote}
                    onChange={handleChange}
                  />

                  <TextField label='Description'
                    variant='outlined'
                    size='small'
                    id='outlined-multiline-static'
                    margin="dense"
                    multiline
                    rows={8}
                    fullWidth
                    name='description'
                    value={form.description}
                    onChange={handleChange}
                  />

                  <p className='date'>March 12 2021</p>
                </div>

              </div>
            </div>
            <IoLogoInstagram className='icon-instagram' />
            <Link to={`/creation/${form.name}`}>
              <VscSaveAs className='icon-save' onClick={onSubmit}/>
            </Link>

          </div>
        </form>
        : null
      }
    </>
  )
}
