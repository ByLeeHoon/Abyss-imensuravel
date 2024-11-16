// Importando as funções necessárias do Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from './firebase-config'; // Certifique-se de que está importando corretamente do seu arquivo de configuração

// Referências aos elementos do HTML
const registerBtn = document.getElementById('register-btn');
const errorMessage = document.getElementById('error-message');

// Evento para o botão de registro
registerBtn.addEventListener('click', async () => {
    try {
        // Fazendo login com Google (se não tiver conta, o Firebase cria automaticamente)
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log('Usuário registrado/logado:', user);

        // Redirecionando para a página inicial após o login ou registro
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro ao registrar o usuário:', error);
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
});
