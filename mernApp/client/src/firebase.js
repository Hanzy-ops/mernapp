// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-39e16.firebaseapp.com",
  projectId: "mern-estate-39e16",
  storageBucket: "mern-estate-39e16.appspot.com",
  messagingSenderId: "448495203061",
  appId: "1:448495203061:web:6a56d73826afb530270bbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);