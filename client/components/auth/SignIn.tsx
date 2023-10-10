import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { signIn } from '../../../firebase/auth'

function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleClick = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signIn(form.email, form.password)
    } catch (error) {
      console.log(error)
    }
  }


  const clickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const mouseDownPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Paper elevation={3} style={{ width: '80%', margin: '15vh auto 0 auto' }}>
        <Box
          sx={{
            display: 'flex',
            width: '80%',
            margin: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 0 30px 0',
          }}
        >
          <Typography variant="h4" style={{ padding: '25px' }}>
            Welcome back
          </Typography>

          <FormControl
            sx={{ m: 1, width: '32ch' }}
            variant="outlined"
            color="secondary"
          >
            <InputLabel htmlFor="email" sx={{ color: '#744F44' }}>
              Email
            </InputLabel>
            <OutlinedInput
              required
              id="email"
              label="email"
              value={form.email}
              onChange={handleChange}
            />
          </FormControl>
          {/* // error={formError.emailInput ? true : false}
            // helperText={ */}
          {/* //   formError.emailInput ? 'email is required.' : ''
            // } */}

          <FormControl sx={{ m: 1, width: '32ch' }} variant="outlined">
            <InputLabel htmlFor="password" sx={{ color: '#744F44' }}>
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={clickShowPassword}
                    onMouseDown={mouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography
            variant="subtitle2"
            style={{ width: '100%', padding: '0 10px 10px' }}
          >
            <Link
              to="/"
              style={{ color: '#1675d1', textDecoration: 'underline #1675d1' }}
            >
              Forgot password?
            </Link>
          </Typography>

          <Button
            color="secondary"
            sx={{ m: 1, width: '37ch' }}
            variant="contained"
            onClick={handleClick}
          >
            Sign in
          </Button>

          <Typography
            variant="subtitle2"
            style={{ width: '100%', padding: '0 10px 10px' }}
          >
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#1675d1', textDecoration: 'underline #1675d1' }}
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
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
