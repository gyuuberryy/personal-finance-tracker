// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2JsoQxdhtz8SeQFVvA2O5jD5c3o4_WOM",
  authDomain: "savvyspend-e61a9.firebaseapp.com",
  projectId: "savvyspend-e61a9",
  storageBucket: "savvyspend-e61a9.appspot.com",
  messagingSenderId: "85306886161",
  appId: "1:85306886161:web:e8eeeb87304327064c89b0",
  measurementId: "G-3YEKWCRQF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };