// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY5s-2V8-xdUL4GQnEzIQCHdakY8Npq44",
  authDomain: "next-web-login.firebaseapp.com",
  projectId: "next-web-login",
  storageBucket: "next-web-login.appspot.com",
  messagingSenderId: "937148088155",
  appId: "1:937148088155:web:e5c8f82645e8e04b26a47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);