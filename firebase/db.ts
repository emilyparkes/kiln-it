import { onValue, ref, set } from 'firebase/database'
import { getUser } from './auth'
import { db } from './index'

// ----- UTILS -----

function getData(path: string, cb: (data: any) => void ) {
  const { uid } = getUser()
  const theRef = ref(db, `users/${uid}/${path}`)
  onValue(theRef, (snapshot) => cb(snapshot.val()))
}

function setData(path: string, data: any) {
  const { uid } = getUser()
  return set(ref(db, `users/${uid}/${path}`), data)
}

// ----- FUNCTIONS -----

export function addUserToDb() {
  setData(`runs`, {})
}