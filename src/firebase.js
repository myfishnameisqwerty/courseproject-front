import firebase from 'firebase/app'
import "firebase/auth"
const env = process.env
const app = firebase.initializeApp({
    apiKey: env.REACT_APP_FIREBASE_API_KEY,
    authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_FIREBASE_SENDER_ID,
    appId: env.REACT_APP_FIREBASE_API_ID,
    measurementId: env.REACT_APP_FIREBASE_MEASUREMENT_ID
})
export const auth = app.auth()
export default app