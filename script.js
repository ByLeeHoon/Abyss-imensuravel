// Importando as funções necessárias do Firebase
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase-config'; // Certifique-se de que está importando corretamente do seu arquivo de configuração

// Referências ao botão de logout
const logoutBtn = document.getElementById('logout-btn');

// Verifica se o usuário está logado ao carregar a página
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Se não houver usuário logado, redireciona para a página de registro
        window.location.href = 'register.html';
    } else {
        // Se o usuário estiver logado, carrega as fichas ou outros dados necessários
        carregarFichas();

        // Exibe o botão de logout
        logoutBtn.style.display = 'block';
    }
});

// Evento para logout
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Após logout, redireciona para a página de registro
        window.location.href = 'register.html';
    }).catch((error) => {
        console.error('Erro ao fazer logout:', error);
    });
});

// Função para carregar as fichas (sem `localStorage` agora)
function carregarFichas() {
    // Você pode carregar as fichas de um banco de dados ou API
    // Neste exemplo, estamos simulando com um array estático
    const fichas = [
        { nome: 'Guerreiro', classe: 'Lutador', data: '2024-11-16' },
        { nome: 'Mago', classe: 'Feiticeiro', data: '2024-11-16' }
    ];

    renderFichas(fichas);
}

// Função para renderizar as fichas na tela
function renderFichas(fichas) {
    const fichasContainer = document.getElementById('fichas-container');
    fichas.forEach((ficha, index) => {
        const fichaCard = document.createElement('div');
        fichaCard.className = 'ficha-card';
        fichaCard.innerHTML = `
            <div>
                <h2>${ficha.nome || '[Sem nome]'}</h2>
                <p>${ficha.classe}</p>
                <p>Registrado em ${ficha.data}</p>
            </div>
            <button onclick="acessarFicha(${index})">Acessar Ficha</button>
        `;
        fichasContainer.appendChild(fichaCard);
    });
}

// Função para acessar a ficha (caso você tenha uma tela para editar a ficha)
function acessarFicha(index) {
    // Aqui você pode implementar a lógica para acessar a ficha
    console.log('Acessando ficha:', index);
}
