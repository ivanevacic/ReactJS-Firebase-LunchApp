//Firebase config

import firebase from 'firebase'

//Firebase configuration
const config = {
    apiKey: 'AIzaSyCgun5wHaXz-ozMa7oy4V64PKt-9YHrIK4',
    authDomain: 'firstflightwithfriends.firebaseapp.com',
    databaseURL: 'https://firstflightwithfriends.firebaseio.com',
    projectId: 'firstflightwithfriends',
    //Store larger files(images,movies,etc....)
    storageBucket: 'firstflightwithfriends.appspot.com',
    messagingSenderId: '974294218695'
};

//Initialize firebase with our configuration
firebase.initializeApp(config)

//Export firebase 'connection' so it's usable outside
export default firebase
//Exports instance of the firebase database so it's easire to call it
export const database = firebase.database()