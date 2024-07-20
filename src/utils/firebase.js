// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtmDHw4ukf41AJtMghrw7eRl0xeThO0pE",
  authDomain: "netflixgpt-41a60.firebaseapp.com",
  projectId: "netflixgpt-41a60",
  storageBucket: "netflixgpt-41a60.appspot.com",
  messagingSenderId: "409655005652",
  appId: "1:409655005652:web:4994813ab808b0286a4641",
  measurementId: "G-NBNH6XWTLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// connectAuthEmulator(auth,"http://localhost:9099")
export default app;