// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBYpFghXH4e8iJnVK6PvliP-4R4QmzqHzs",
  authDomain: "frendrops-c4726.firebaseapp.com",
  projectId: "frendrops-c4726",
  storageBucket: "frendrops-c4726.firebasestorage.app",
  messagingSenderId: "146052537559",
  appId: "1:146052537559:web:19e40c90e5c6303606e492",
  measurementId: "G-EZ55ZLYCSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
