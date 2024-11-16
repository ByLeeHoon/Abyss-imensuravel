// Importando as funções necessárias do Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from './firebase-config'; // Certifique-se de que está importando corretamente do seu arquivo de configuração

// Referências aos elementos do HTML
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

// Evento para o botão de login
loginBtn.addEventListener('click', async () => {
    try {
        // Fazendo login com Google
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log('Usuário logado:', user);

        // Salvando o usuário no localStorage para controlar o login
        localStorage.setItem('usuarioLogado', JSON.stringify(user));

        // Redirecionando para a página inicial após o login
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});
