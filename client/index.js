import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { FirebaseAppProvider } from 'reactfire'

import App from './components/App'

const firebaseConfig = {
    apiKey: 'AIzaSyDKTByLvGm0r5nKHCoflyYpA1LRCr1xlfY',
    authDomain: 'kiln-it-coco.firebaseapp.com',
    databaseURL: 'https://kiln-it-coco.firebaseio.com',
    projectId: 'kiln-it-coco',
    storageBucket: 'kiln-it-coco.appspot.com',
    messagingSenderId: '254509730430',
    appId: '1:254509730430:web:11dd1ffd25f7efdbfd662f'
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
      <Router>
        <App />
      </Router>
    </FirebaseAppProvider>
    ,
    document.getElementById('app')
  )
})
