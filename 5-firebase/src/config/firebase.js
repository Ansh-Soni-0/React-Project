// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/forestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMcHuFTWVSfW8Rd5HD4pRObAO0cFrik5s",
  authDomain: "fir-project-75647.firebaseapp.com",
  projectId: "fir-project-75647",
  storageBucket: "fir-project-75647.firebasestorage.app",
  messagingSenderId: "111103206128",
  appId: "1:111103206128:web:c95e96629325bb08a45835",
  measurementId: "G-JFLXQZD2S5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);