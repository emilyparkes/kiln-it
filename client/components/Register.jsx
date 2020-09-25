import React, { useState } from 'react'

export default function Register () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {

  }

  return (
    <>
      <div className='registerTitle'>
        <h1>Register</h1>
      </div>

      <label className='label'>Username</label>
      <input
        type='username'
        value={username}
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <label className='label'>Password</label>
      <input
        type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button
        type='button'
        onClick={handleClick}>
          Register
      </button>

    </>
  )
}
