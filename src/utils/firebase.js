// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBeyCPza3zx_dtKXLSj0fzBhhAqJX6Cw",
  authDomain: "netflix-gpt-8106f.firebaseapp.com",
  projectId: "netflix-gpt-8106f",
  storageBucket: "netflix-gpt-8106f.firebasestorage.app",
  messagingSenderId: "750547628207",
  appId: "1:750547628207:web:1ba4165a72789c49e7e45a",
  measurementId: "G-PZ3CWH6THN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();