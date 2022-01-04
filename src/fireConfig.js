// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClGlQKNTGkJ_lyUXjOPYzeku1cr7BWWxs",
  authDomain: "firecommerce-6437a.firebaseapp.com",
  projectId: "firecommerce-6437a",
  storageBucket: "firecommerce-6437a.appspot.com",
  messagingSenderId: "417810608572",
  appId: "1:417810608572:web:2232ea605c5770281f7bb9",
  measurementId: "G-GLZFM1FVTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// FIREBASE 2 FEATTURES -- FIRESTORE OR FIREDB
const fireDB = getFirestore(app);

export default fireDB;
