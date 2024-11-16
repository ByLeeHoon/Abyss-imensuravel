import { auth, GoogleAuthProvider, db } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

// Referências do DOM
const googleLoginBtn = document.getElementById('google-login-btn');
const errorMessage = document.getElementById('error-message');

// Função para autenticar o usuário com o Google
googleLoginBtn.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;
            console.log('Usuário logado:', user);

            // Salvar dados do usuário no Firestore
            await salvarDadosNoFirestore(user);

            // Redirecionar para a página inicial após login
            window.location.href = '/index.html';
        })
        .catch((error) => {
            console.error('Erro no login:', error);
            errorMessage.textContent = 'Erro ao tentar fazer login. Tente novamente.';
        });
});

// Função para salvar os dados do usuário no Firestore
async function salvarDadosNoFirestore(user) {
    try {
        const ficha = {
            nome: user.displayName || 'Usuário Desconhecido',
            email: user.email,
            uid: user.uid,
            dataCriacao: new Date().toLocaleDateString('pt-BR'),
        };

        // Salva os dados do usuário na coleção "usuarios"
        await addDoc(collection(db, 'usuarios'), ficha);
        console.log('Dados do usuário salvos com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar dados no Firestore:', error);
    }
}
