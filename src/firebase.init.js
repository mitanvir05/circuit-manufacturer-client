// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs0-nbM7Se6RKYoVq7_7b_AimphIGItlQ",
  authDomain: "circuit-manufacturer.firebaseapp.com",
  projectId: "circuit-manufacturer",
  storageBucket: "circuit-manufacturer.appspot.com",
  messagingSenderId: "228278319511",
  appId: "1:228278319511:web:4b1b464e18d8b292126cd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
