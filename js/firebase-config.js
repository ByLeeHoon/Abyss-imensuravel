import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0aiEvb-Eg0Hpa_Cvuj1-jQIbPm2d7zJE",
  authDomain: "abismo-imensuravel.firebaseapp.com",
  projectId: "abismo-imensuravel",
  storageBucket: "abismo-imensuravel.firebasestorage.app",
  messagingSenderId: "915439292491",
  appId: "1:915439292491:web:76d4a24bf7e6964aeefdce",
  measurementId: "G-9ZMNV6Y8K8"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Provider para login do Google

export { auth, googleProvider };
