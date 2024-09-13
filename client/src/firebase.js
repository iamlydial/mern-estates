// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estates-93ea1.firebaseapp.com",
  projectId: "mern-estates-93ea1",
  storageBucket: "mern-estates-93ea1.appspot.com",
  messagingSenderId: "1055690317055",
  appId: "1:1055690317055:web:e4073dd997f37505b200ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
