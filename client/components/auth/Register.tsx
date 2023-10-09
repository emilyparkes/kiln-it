import { useState } from 'react'

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

      <label htmlFor='username' className='label'>Username</label>
      <input
        type='username'
        value={username}
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <label htmlFor='email' >Email</label>
      <input
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />

      <label htmlFor='password' className='label'>Password</label>
      <input
        type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button type='button' onClick={handleClick}>
        Register
        </button>
      </ThemeProvider>
    </>
  )
}

export default Register
