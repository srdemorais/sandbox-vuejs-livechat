import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB9v0zEvoa7USRzLunhEdQ4nnQnxdbQYBw",
  authDomain: "frontend-vue-f5198.firebaseapp.com",
  projectId: "frontend-vue-f5198",
  storageBucket: "frontend-vue-f5198.appspot.com",
  messagingSenderId: "1069174650510",
  appId: "1:1069174650510:web:a3872e78a9ba47fb707bdf",
  measurementId: "G-37BSLW2LC1"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// init the authentication service
const projectAuth = firebase.auth()

// init timestamp field value
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}