// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpFXXc4ZUbxHuJ_J12GTu73D_zWA3t0r4",
  authDomain: "tenderpro-8ecf5.firebaseapp.com",
  projectId: "tenderpro-8ecf5",
  storageBucket: "tenderpro-8ecf5.firebasestorage.app",
  messagingSenderId: "7485570997",
  appId: "1:7485570997:web:3706000c700f4ed576a3fc"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database and export it
export const db = getFirestore(app);