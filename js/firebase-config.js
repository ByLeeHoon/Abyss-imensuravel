import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0aiEvb-Eg0Hpa_Cvuj1-jQIbPm2d7zJE",
    authDomain: "abismo-imensuravel.firebaseapp.com",
    projectId: "abismo-imensuravel",
    storageBucket: "abismo-imensuravel.firebasestorage.app",
    messagingSenderId: "915439292491",
    appId: "1:915439292491:web:39fbc5c2e8d3e3efeefdce",
    measurementId: "G-0CND4LYC1Z"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta módulos para uso em outros arquivos
export { auth, GoogleAuthProvider, db };
