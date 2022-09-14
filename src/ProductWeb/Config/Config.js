import { initializeApp } from "firebase/app";
// import  firebase from 'firebase'
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage"
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDc0owQlIC3Ta2lhfXy5sMePQCxuQLTdjs",
    authDomain: "e-commerce-web-b1bda.firebaseapp.com",
    projectId: "e-commerce-web-b1bda",
    storageBucket: "e-commerce-web-b1bda.appspot.com",
    messagingSenderId: "585247006954",
    appId: "1:585247006954:web:f50c7bff72d6221a94f793",
    measurementId: "G-3333RC20XB"
  };
  

firebase.initializeApp(firebaseConfig);


// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();.

// export {auth, db, storage}
const app = initializeApp(firebaseConfig)



// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, storage };