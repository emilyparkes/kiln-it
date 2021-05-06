import React, { useEffect, useState } from 'react'
import { useFirebaseApp } from 'reactfire'
import 'firebase/auth'

import {saveUser, getUser} from './utils'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ error, setError ] = useState('')

  const [ auth, setAuth ] = useState( null )

  const firebase = useFirebaseApp()

  const signIn = e => {
    e.preventDefault()
    setError('')
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        setAuth(user)
        saveUser({ uid:user.user.uid, email, password })
      })
      .catch(err => setError(err.message))
  }

  useEffect(() => {
    getUser((err, user) => {
      if (user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(user => setAuth(user))
      }
    })
  }, [])

  return (
    <>
      <div>
        <h1>Sign in</h1>
      </div>

      {error && error}

      <label>Email</label>
      <input
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
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
        onClick={signIn}> Sign in
      </button>
    </>
  )
}
