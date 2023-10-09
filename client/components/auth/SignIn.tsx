import { useState } from 'react'

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

      <label htmlFor='username'>Username</label>
      <input
        id='username'
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        type='text'
      />

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
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
