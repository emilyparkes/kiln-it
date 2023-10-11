import { ChangeEvent, FormEvent, StrictMode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

import { register } from '../../../firebase/auth'
import MyFormHelperText from './MyFormHelperText'

function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const clickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const clickShowConfirmPassword = () => {
    setShowPassword(!showPassword)
  }

  const mouseDownPassword = () => {
    setShowPassword(!showPassword)
  }

  const mouseDownConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleClick = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await register(form.email, form.password)
      navigate('/gallery')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <StrictMode>
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
          <Typography variant='h4' style={{ padding: '25px' }}>
            Create Account
          </Typography>

          <Typography
            variant='caption'
            style={{ width: '100%', padding: '0 10px 10px' }}
          >
            Creating an account to get access to &apos;behind the scenes&apos;
            photos and notes of the pieces created
          </Typography>

          <FormControl
            sx={{ m: 1, width: '32ch' }}
            variant='outlined'
            color='secondary'
          >
            <InputLabel htmlFor='email' sx={{ color: '#744F44' }}>
              Email
            </InputLabel>
            <OutlinedInput
              required
              id='email'
              label='email'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
            <MyFormHelperText />
          </FormControl>
          {/* // error={formError.usernameInput ? true : false}
            // helperText={ */}
          {/* //   formError.usernameInput ? 'Username is required.' : ''
            // } */}

          <FormControl
            sx={{ m: 1, width: '32ch' }}
            variant='outlined'
            color='secondary'
          >
            <InputLabel htmlFor='password' sx={{ color: '#744F44' }}>
              Password
            </InputLabel>
            <OutlinedInput
              required
              id='password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={form.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={clickShowPassword}
                    onMouseDown={mouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
            <MyFormHelperText />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: '32ch' }}
            variant='outlined'
            color='secondary'
          >
            <InputLabel htmlFor='confirm-password' sx={{ color: '#744F44' }}>
              Confirm Password
            </InputLabel>
            <OutlinedInput
              required
              id='confirm-password'
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirm'
              value={form.confirm}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle confirm password visibility'
                    onClick={clickShowConfirmPassword}
                    onMouseDown={mouseDownConfirmPassword}
                    edge='end'
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label='Confirm Password'
            />
            <MyFormHelperText />
          </FormControl>

          <Button
            color='secondary'
            sx={{ m: 1, width: '37ch' }}
            variant='contained'
            onClick={handleClick}
          >
            Register
          </Button>

          <Typography
            variant='subtitle2'
            style={{ width: '100%', padding: '0 10px 10px' }}
          >
            Already got an account?{' '}
            <Link
              to='/signin'
              style={{ color: '#1675d1', textDecoration: 'underline #1675d1' }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Paper>
      </StrictMode>
    </>
  )
}

export default Register
