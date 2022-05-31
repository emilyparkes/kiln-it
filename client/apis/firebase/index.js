import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID_KEYY,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_KEY,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_KEY,
  appId: process.env.FIREBASE_APP_ID_KEY
}

console.log(firebaseConfig)

export default initializeApp(firebaseConfig)
