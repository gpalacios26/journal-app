import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyFFSDGDFGAfdssdsgfgdiOkJw-B1BMQg",
    authDomain: "react-demo-9ab94.firebaseapp.com",
    projectId: "react-demo-9ab94",
    storageBucket: "react-demo-9ab94.appspot.com",
    messagingSenderId: "355573546183",
    appId: "1:355573546183:web:eee8b7f2eea40b155812e2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}