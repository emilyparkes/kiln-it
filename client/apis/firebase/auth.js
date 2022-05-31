import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import request from 'superagent'

const auth = getAuth()
export default auth

export function getUser () {
  return auth.currentUser
}

export function register (email, password, errFn) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => createWhanauRole(email, userCredential.user.uid, userCredential.user))
    .catch(({ code }) => errFn(readError(code)))
}

export function signIn (email, password, errFn) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch(({ code }) => errFn(readError(code)))
}

export function logOut () {
  return signOut(auth)
    .then(() => {
      console.log('LOGGED OUT')
      return null
    }).catch((error) => {
      console.log('LOG OUT ERROR:', error.code, error.message)
    })
}

function readError (code) {
  console.log(code)
  switch (code) {
    case 'auth/weak-password':
      return 'Password too weak'
    case 'auth/email-already-in-use':
      return 'Email already registered'
    case 'auth/wrong-password':
      return 'Password incorrect'
    case 'auth/user-not-found':
      return 'Email incorrect'
    case 'auth/too-many-requests':
      return 'Too many requests - please try again later'
    default:
      return code
  }
}

function createWhanauRole (email, uid, firebaseUser) {
  return request.post('/api/v1/auth')
    .send({ email, uid })
    .then((resp) => {
      const body = { ...resp.body, firebaseUser }
      console.log(body)
      return body
    })
}
