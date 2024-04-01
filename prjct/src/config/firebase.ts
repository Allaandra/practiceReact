// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2gSbBaBeoddvKhLZzVTWmXV-55HioFnQ",
  authDomain: "project-64ac9.firebaseapp.com",
  projectId: "project-64ac9",
  storageBucket: "project-64ac9.appspot.com",
  messagingSenderId: "486141819108",
  appId: "1:486141819108:web:d072f086c2c3c905d1d4f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);