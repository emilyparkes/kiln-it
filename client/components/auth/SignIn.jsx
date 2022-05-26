import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TextField } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { brown } from '@material-ui/core/colors'
import { useEditStyles } from '../../styles/mui_overrides'

import { signIn } from '../../apis/firebase/auth'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErr, setFormErr] = useState('')

  const dispatch = useDispatch()
  const classes = useEditStyles()

  const theme = createMuiTheme({
    palette: {
      primary: brown
    }
  })

  const handleClick = () => {
    signIn(email, password, setFormErr)
      .then(user => dispatch(user))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      {formErr}
      <ThemeProvider theme={theme}>
        <div>
          <h1>Sign in</h1>
        </div>

        <TextField label='Email'
          className={classes.name}
          variant='outlined'
          size='small'
          id='outlined-email'
          margin='dense'
          name='name'
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='name@email.com'
          type='email'
        />

        <TextField label='Password'
          className={classes.name}
          variant='outlined'
          size='small'
          id='outlined-password'
          margin='dense'
          name='name'
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          type='password'
        />

        <button data-testid='submit-button'
          onClick={handleClick}> Sign in
        </button>
      </ThemeProvider>
    </>
  )
}
export default SignIn

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
