import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDKTByLvGm0r5nKHCoflyYpA1LRCr1xlfY",
  authDomain: "kiln-it.firebaseapp.com",
  projectId: "kiln-it",
  storageBucket: "kiln-it.appspot.com",
  messagingSenderId: "919903841959",
  appId: "1:919903841959:web:73f534d62dec9089b6b582",
  databaseURL: "https://kiln-it-default-rtdb.asia-southeast1.firebasedatabase.app",
}
const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getDatabase(firebaseApp)