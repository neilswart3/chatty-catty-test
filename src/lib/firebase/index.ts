import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_GOOGLE_DATABASE_URL,
  projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_APP_ID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENT_ID,
}

let app
let rsf
let db
let auth

// if (getApps().length === 0) {
app = initializeApp(firebaseConfig)
rsf = new ReduxSagaFirebase(app)
db = getFirestore(app)
auth = getAuth(app)
// }

const firebase = {
  rsf,
  auth,
  db,
}

export default firebase
