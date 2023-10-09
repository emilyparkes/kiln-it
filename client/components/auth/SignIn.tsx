import { ChangeEvent, useState } from 'react'
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

function SignIn() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {}

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
            <InputLabel htmlFor="username" sx={{ color: '#744F44' }}>
              Username
            </InputLabel>
            <OutlinedInput
              required
              id="username"
              label="Username"
              value={form.username}
              onChange={handleChange}
            />
          </FormControl>
          {/* // error={formError.usernameInput ? true : false}
            // helperText={ */}
          {/* //   formError.usernameInput ? 'Username is required.' : ''
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
