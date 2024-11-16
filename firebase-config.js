// firebase-config.js

// Sua configuração do Firebase (copie e cole as informações do seu projeto)
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
const app = firebase.initializeApp(firebaseConfig);

// Inicializando a autenticação
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();