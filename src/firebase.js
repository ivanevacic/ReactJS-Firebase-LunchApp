import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCgun5wHaXz-ozMa7oy4V64PKt-9YHrIK4',
  authDomain: 'firstflightwithfriends.firebaseapp.com',
  databaseURL: 'https://firstflightwithfriends.firebaseio.com',
  projectId: 'firstflightwithfriends',
  //Store larger files(images,movies,etc....)
  storageBucket: 'firstflightwithfriends.appspot.com',
  messagingSenderId: '974294218695'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
