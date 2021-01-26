import React, { useState } from 'react'
import styled from 'styled-components'

const AuthContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Alegreya Sans SC', sans-serif;
`
const AuthImage = styled.div`
  height: 100%;
  width: 50%;
`
const Form = styled.div`
  height: 100%;
  width: 50%;
`

export default function SignIn () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {}

  return (
    <>
      <AuthContainer>
        <AuthImage/>
        <Form>
          <div>
            <h1>Sign in</h1>
          </div>

          <label>Username</label>
          <input
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            type='text'
          />

          <label>Password</label>
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
        </Form>
      </AuthContainer>
    </>
  )
}
