import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBgpntF_3ZFYBbLKjgXZAgVtDOeGcmMf4k",
  authDomain: "reactfirebaselunchapp.firebaseapp.com",
  databaseURL: "https://reactfirebaselunchapp.firebaseio.com",
  projectId: "reactfirebaselunchapp",
  storageBucket: "",
  messagingSenderId: "762873724586"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
