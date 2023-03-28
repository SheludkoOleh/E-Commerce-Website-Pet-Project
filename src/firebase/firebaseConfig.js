
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: "AIzaSyBd3cW3j5MCLmjU-6c2B9liMdH4cKNgGQM",
  authDomain: "escoli-project.firebaseapp.com",
  projectId: "escoli-project",
  storageBucket: "escoli-project.appspot.com",
  messagingSenderId: "911183002546",
  appId: "1:911183002546:web:db3e6fcbaf19e44001c2ab",
  measurementId: "G-17E760BZGH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storoge = getStorage(app)
export const googleProvider = new GoogleAuthProvider();

export default app
