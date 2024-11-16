import { auth, googleProvider } from './firebase-config';

const googleLoginBtn = document.getElementById('google-login-btn');
const errorMessage = document.getElementById('error-message');

// Evento para o botão de login com Google
googleLoginBtn.addEventListener('click', async () => {
  try {
    // Fazendo o login com o Google
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('Usuário logado:', user);

    // Armazenando o ID do usuário no localStorage (ou firebase, dependendo da sua necessidade)
    localStorage.setItem('usuarioLogado', user.uid);

    // Redireciona para a página inicial após o login
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error);
    errorMessage.style.display = 'block'; // Exibe a mensagem de erro
  }
});
