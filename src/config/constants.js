import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB54UsDGhQevMn2V-Rsj194lFmEkjt1aNY",
  authDomain: "authentication-example-436e9.firebaseapp.com",
  databaseURL: "https://authentication-example-436e9.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
