// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbPizTw3DVXd9IfOJCcHMCx6M4Ha9WVvg",
  authDomain: "mofapk-6e813.firebaseapp.com",
  projectId: "mofapk-6e813",
  storageBucket: "mofapk-6e813.appspot.com",
  messagingSenderId: "1037381542514",
  appId: "1:1037381542514:web:421b0b777b06e8d30d58eb",
  measurementId: "G-3N0K2XM9M2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
export { db, storage };
