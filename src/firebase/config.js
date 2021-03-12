import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATgcSVLVx6OeS61b1puvWEOunO_ro4itc",
  authDomain: "udemy-vue-firebase-sites-4bbfc.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-4bbfc",
  storageBucket: "udemy-vue-firebase-sites-4bbfc.appspot.com",
  messagingSenderId: "233079414388",
  appId: "1:233079414388:web:137b0d0bbd81c133d0bb21"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timeStamp }
