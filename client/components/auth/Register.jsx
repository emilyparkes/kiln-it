import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { TextField } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { brown } from '@material-ui/core/colors'
import { useEditStyles } from '../../styles/mui_overrides'

import { register } from '../../apis/firebase/auth'
import { signInUser } from '../../actions/auth'

function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [formErr, setFormErr] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useEditStyles()

  const theme = createMuiTheme({
    palette: {
      primary: brown
    }
  })

  const handleClick = () => {
    register(email, password, setFormErr)
      // eslint-disable-next-line promise/always-return
      .then(user => {
        dispatch(signInUser(user))
        navigate('/gallery')
      })
      .catch(err => console.log(err.message))
  }

  return (
    <>
      {formErr}
      <ThemeProvider theme={theme}>
        <div className='registerTitle'>
          <h1>Register</h1>
        </div>

        <TextField label='Email'
          className={classes.name}
          variant='outlined'
          size='small'
          id='outlined-email'
          margin='dense'
          name='name'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='kelly@clay.com'
          type='email'
        />

        <TextField label='Password'
          className={classes.name}
          variant='outlined'
          size='small'
          id='outlined-password'
          margin='dense'
          name='name'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          type='password'
        />
        <TextField label='Confirm Password'
          className={classes.name}
          variant='outlined'
          size='small'
          id='outlined-password-confirm'
          margin='dense'
          name='name'
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder='Re-type password'
          type='password'
        />

        <button type='button' onClick={handleClick}>
        Register
        </button>
      </ThemeProvider>
    </>
  )
}

export default Register
