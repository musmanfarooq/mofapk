// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  measurementId: "G-3N0K2XM9M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);