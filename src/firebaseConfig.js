// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVzlxeRKV12xGJm-aXVlFOrwmFhpKOD5s",
    authDomain: "interiitdevbootcamp.firebaseapp.com",
    projectId: "interiitdevbootcamp",
    storageBucket: "interiitdevbootcamp.appspot.com",
    messagingSenderId: "847140159040",
    appId: "1:847140159040:web:111735a73ec5868fade9a5",
    measurementId: "G-RFC1YCD6H8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };