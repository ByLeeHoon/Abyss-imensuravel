// Importando as funções necessárias do Firebase
import { auth, googleProvider } from './firebase-config'; // Certifique-se de que está importando corretamente

// Referência ao botão de login com Google
const googleLoginBtn = document.getElementById('google-login-btn');

// Evento de clique no botão de login com Google
googleLoginBtn.addEventListener('click', async () => {
    try {
        // Tenta fazer login com o Google
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log('Usuário logado:', user);

        // Salvar dados do usuário, se necessário (opcional)
        localStorage.setItem('usuarioLogado', user.uid);

        // Redirecionar para a página principal após o login
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro ao fazer login com Google:', error);
        alert('Erro ao tentar fazer login com Google.');
    }
});
