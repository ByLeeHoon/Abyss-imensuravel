// Configuração do Firebase (importações e inicialização)
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { auth } from './firebase-config';  // Certifique-se de que está importando corretamente do seu firebase-config.js

// Referências ao Firestore
const db = getFirestore();

// Armazena os atributos do personagem
let atributos = {
    agilidade: 1,
    força: 1,
    intelecto: 1,
    presença: 1,
    vigor: 1,
};

// Seletores
const atributosDivs = document.querySelectorAll('.atributo-numerico');
const header = document.querySelector('header');

// Atualiza visualmente os valores na interface
function atualizarAtributosNaTela() {
    const atributosKeys = Object.keys(atributos);
    atributosDivs.forEach((div, index) => {
        div.textContent = atributos[atributosKeys[index]];
    });
}

// Configura um atributo para ser editável
function tornarEditavel(div, atributoKey) {
    const valorAtual = atributos[atributoKey];
    const input = document.createElement('input');
    input.type = 'number';
    input.value = valorAtual;
    input.min = 0;
    input.max = 5;
    input.style.width = '50px';

    // Substitui o número pelo campo de entrada
    div.innerHTML = '';
    div.appendChild(input);
    input.focus();

    // Evento para salvar ao sair do campo ou pressionar Enter
    const salvarAtributo = () => {
        let novoValor = parseInt(input.value, 10);
        if (isNaN(novoValor) || novoValor < 0 || novoValor > 5) {
            novoValor = valorAtual; // Reverte se inválido
        }
        atributos[atributoKey] = novoValor; // Atualiza o atributo
        atualizarAtributosNaTela(); // Atualiza na interface
    };

    input.addEventListener('blur', salvarAtributo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            salvarAtributo();
            div.focus(); // Remove o foco do input
        }
    });
}

// Adiciona evento de clique para editar os atributos
atributosDivs.forEach((div, index) => {
    const atributoKey = Object.keys(atributos)[index];
    div.addEventListener('click', () => {
        tornarEditavel(div, atributoKey);
    });
});

// Evento para clicar no gradiente e voltar à tela inicial
header.addEventListener('click', () => {
    salvarFichaFirebase();
    window.location.href = 'index.html';
});

// Salvar ficha no Firebase Firestore
async function salvarFichaFirebase() {
    try {
        // Dados da ficha
        const novaFicha = {
            nome: 'Novo Personagem',
            classe: 'Classe Indefinida',
            data: new Date().toLocaleDateString('pt-BR'),
            atributos: { ...atributos },
            userId: auth.currentUser ? auth.currentUser.uid : null, // Salvar o ID do usuário logado
        };

        // Adicionar ficha na coleção "fichas"
        const docRef = await addDoc(collection(db, "fichas"), novaFicha);

        console.log('Ficha salva com ID: ', docRef.id);
    } catch (error) {
        console.error('Erro ao salvar ficha:', error);
    }
}

// Inicializa os valores dos atributos na tela
atualizarAtributosNaTela();
