import React, { useState } from 'react'

function SignIn () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {}

  return (
    <>
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
    </>
  )
}
export default SignIn
