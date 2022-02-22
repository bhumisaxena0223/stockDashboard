import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDknn8POQF54r3GuPRdE3a4oY6pEN-RrHg',
  authDomain: 'stock-exchange-4e635.firebaseapp.com',
  projectId: 'stock-exchange-4e635',
  storageBucket: 'stock-exchange-4e635.appspot.com',
  messagingSenderId: '792871370572',
  appId: '1:792871370572:web:1696e048fe7bad7208d9e9'
}

firebase.initializeApp(config)
