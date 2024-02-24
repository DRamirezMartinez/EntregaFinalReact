import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwz1lVYl4rLJ1F7841-9A2ReaV9Hbv40",
  authDomain: "final-coder-ecommerce.firebaseapp.com",
  projectId: "final-coder-ecommerce",
  storageBucket: "final-coder-ecommerce.appspot.com",
  messagingSenderId: "686065162459",
  appId: "1:686065162459:web:1e2ae587a0fa6996a754fe"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
