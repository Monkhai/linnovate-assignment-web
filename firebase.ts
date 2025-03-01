// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCtfJ5L5BsSPnrNhNZr8p18AWRmbxsmsk",
  authDomain: "testproject-6eefe.firebaseapp.com",
  projectId: "testproject-6eefe",
  storageBucket: "testproject-6eefe.firebasestorage.app",
  messagingSenderId: "675690689261",
  appId: "1:675690689261:web:4182334b9298dfe9b9d2e4",
  measurementId: "G-F0CNFHPD9Q",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
