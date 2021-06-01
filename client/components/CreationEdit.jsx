import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { TextField, MenuItem, InputAdornment } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { brown } from '@material-ui/core/colors'
import { IoLogoInstagram } from 'react-icons/io'
import { VscSaveAs } from 'react-icons/vsc'

import { useEditStyles } from '../styles/mui_overrides'
import { updateCreation } from '../apis/creations'
import { findString, toLowHyphen, toCapSpace } from '../client-utils'

function CreationEdit ({ all, match, history }) {
  const classes = useEditStyles()
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [form, setForm] = useState(null)

  // HARD CODED FOR NOW
  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']
  //

  const theme = createMuiTheme({
    palette: {
      primary: brown
    }
  })

  useEffect(() => {
    if (all) {
      const name = toCapSpace(match.params.name)
      const creation = findString(all.creations, 'name', name)
      setForm(creation)
    }
  }, [all])

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
    delete form.clay
    delete form.shape
    delete form.glaze
    delete form.status
    updateCreation(form)
    const newName = toLowHyphen(form.name)
    history.push(`/creations/${newName}`)
  }

  return (
    <>
      { (form && all) &&
      <form>
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
                <ThemeProvider theme={theme}>

                  <TextField label='Name'
                    className={classes.name}
                    variant='outlined'
                    size='small'
                    id='outlined-name'
                    margin='dense'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                  />

                  <TextField label='Shape'
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
                    {all.shapes.map((obj) => (
                      <MenuItem key={obj.id} value={obj.shape}>
                        {obj.shape}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Status'
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
                    {all.statuses.map((obj) => (
                      <MenuItem key={obj.id} value={obj.status}>
                        {obj.status}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Clay'
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
                    {all.clay.map((obj) => (
                      <MenuItem key={obj.id} value={obj.clay}>
                        {obj.clay}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Weight'
                    className={classes.textField}
                    variant='outlined'
                    size='small'
                    id='outlined-weight'
                    margin='dense'
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>g</InputAdornment>
                    }}
                    name='weight'
                    value={form.weight}
                    onChange={handleChange}
                  />

                  <TextField label='Glaze'
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
                    {all.glazes.map((obj) => (
                      <MenuItem key={obj.id} value={obj.glaze}>
                        {obj.glaze}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField label='Makers Note'
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

                  <TextField label='Description'
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
          <IoLogoInstagram className='icon-instagram' />
          <VscSaveAs className='icon-save' onClick={onSubmit}/>

        </div>
      </form>
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    all: store.all
  }
}

export default connect(mapStateToProps)(CreationEdit)
