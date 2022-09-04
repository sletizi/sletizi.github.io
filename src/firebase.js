import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6X6YI3dzH95zrtA-QGUJBdc7ttLXE7xs",
    authDomain: "mypage-637f1.firebaseapp.com",
    databaseURL: "https://mypage-637f1.firebaseio.com",
    projectId: "mypage-637f1",
    storageBucket: "mypage-637f1.appspot.com",
    messagingSenderId: "1091378463717",
    appId: "1:1091378463717:web:0a02ffc4943485efd1650c",
    measurementId: "G-NESF15PFTE"
  }
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db = firebaseApp.firestore()