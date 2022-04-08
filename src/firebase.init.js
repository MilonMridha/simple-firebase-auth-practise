// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_RieV3Rj2xbJ9etyFDHkvZv4EtrIOeM",
  authDomain: "simple-firebase-practise-two.firebaseapp.com",
  projectId: "simple-firebase-practise-two",
  storageBucket: "simple-firebase-practise-two.appspot.com",
  messagingSenderId: "761707818841",
  appId: "1:761707818841:web:a90f81c12c2f35ef81a648",
  measurementId: "G-79D1K8Y6Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;