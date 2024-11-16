// firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// Função para login com Google
document.getElementById('google-login-btn').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Armazenar informações do usuário e redirecionar para a página inicial
            const user = result.user;
            localStorage.setItem('usuarioLogado', user.uid);
            window.location.href = 'index.html'; // Redireciona para o index após login
        })
        .catch((error) => {
            console.error('Erro ao realizar login:', error);
        });
});
