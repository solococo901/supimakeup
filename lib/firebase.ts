import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyA6aBXrdfTptNim3GUimo0RyAoM4dxiUKw",
  authDomain: "supi-makeup.firebaseapp.com",
  projectId: "supi-makeup",
  storageBucket: "supi-makeup.firebasestorage.app",
  messagingSenderId: "363170702290",
  appId: "1:363170702290:web:2de9f013dac9f11cd01e0b",
  measurementId: "G-8NJJVSX9GE"
}

// init
const app = initializeApp(firebaseConfig)

// services
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)