const jwt = require('jsonwebtoken')

const storage = global.window.localStorage
const storageKey = 'token'

export function createToken (payload) {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '6m' })
  } catch (err) {
    console.log('jwt err', err.message)
  }
}

export function saveUser (user) {
  const token = createToken(user)
  if (!token) {
    storage.removeItem(storageKey)
  } else {
    storage.setItem(storageKey, token)
  }
}

export function getUser (f) {
  const token = storage.getItem(storageKey)

  jwt.verify(token, process.env.JWT_SECRET, f)
}
