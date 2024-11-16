// Importação das funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

// Configurações do Firebase (use as suas credenciais reais)
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
const googleProvider = new GoogleAuthProvider();

// Verifica se o usuário está logado ao carregar a página
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`Usuário logado: ${user.displayName} (${user.email})`);
    } else {
        console.log("Nenhum usuário logado.");
    }
});

// Função para login com o Google
export async function loginComGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Login bem-sucedido:", result.user);

        // Após o login bem-sucedido, redireciona para a página inicial
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao realizar login:", error.message);
        throw error; // Você pode lidar com o erro de outra forma, se necessário
    }
}

// Exporta o objeto auth para uso em outras partes do app
export { auth, googleProvider };
