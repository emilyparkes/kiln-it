import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'kiln-it-coco.firebaseapp.com',
  projectId: 'kiln-it-coco'
}

console.log(firebaseConfig)

export default initializeApp(firebaseConfig)
