import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0aiEvb-Eg0Hpa_Cvuj1-jQIbPm2d7zJE",
  authDomain: "abismo-imensuravel.firebaseapp.com",
  projectId: "abismo-imensuravel",
  storageBucket: "abismo-imensuravel.appspot.com",
  messagingSenderId: "915439292491",
  appId: "1:915439292491:web:76d4a24bf7e6964aeefdce",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função para o login
document.getElementById("google-login-btn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Usuário logado:", user);
      localStorage.setItem("usuarioLogado", user.uid); // Salva o ID do usuário
      window.location.href = "index.html"; // Redireciona para a página inicial
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error);
      document.getElementById("error-message").innerText = "Erro ao fazer login.";
      document.getElementById("error-message").style.display = "block";
    });
});
