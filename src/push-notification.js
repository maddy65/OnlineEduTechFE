import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXX"
  });
}