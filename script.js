import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

// Configuração do Firebase (substitua com os valores reais)
const firebaseConfig = {
  apiKey: "AIzaSyB0aiEvb-Eg0Hpa_Cvuj1-jQIbPm2d7zJE",
  authDomain: "abismo-imensuravel.firebaseapp.com",
  projectId: "abismo-imensuravel",
  storageBucket: "abismo-imensuravel.appspot.com",
  messagingSenderId: "915439292491",
  appId: "1:915439292491:web:76d4a24bf7e6964aeefdce",
  measurementId: "G-9ZMNV6Y8K8"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar uma nova ficha no Firestore
async function adicionarFicha(ficha) {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (!usuarioLogado) {
        alert("Você precisa estar logado para adicionar uma ficha.");
        return;
    }

    const user = JSON.parse(usuarioLogado);
    
    try {
        const docRef = await addDoc(collection(db, "fichas"), {
            ...ficha,
            userId: user.uid  // Adiciona o ID do usuário à ficha
        });
        console.log("Ficha adicionada com ID: ", docRef.id);
        carregarFichas(); // Atualiza a lista de fichas
    } catch (e) {
        console.error("Erro ao adicionar ficha: ", e);
    }
}

// Função para carregar as fichas do Firestore
async function carregarFichas() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (!usuarioLogado) {
        alert("Você precisa estar logado para visualizar suas fichas.");
        return;
    }

    const user = JSON.parse(usuarioLogado);
    const q = query(collection(db, "fichas"), where("userId", "==", user.uid)); // Filtra as fichas do usuário

    const querySnapshot = await getDocs(q);
    const fichas = [];
    querySnapshot.forEach((doc) => {
        fichas.push(doc.data());
    });
    renderFichas(fichas);
}

// Função para renderizar as fichas na tela
function renderFichas(fichas) {
    const fichasContainer = document.getElementById('fichas-container');
    fichasContainer.innerHTML = ''; // Limpa a tela
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

// Função de clique para adicionar uma ficha nova com os atributos reais
document.getElementById('nova-ficha-btn').addEventListener('click', () => {
    const novaFicha = {
        nome: 'Novo Personagem',
        classe: 'Classe Indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: { 
            agilidade: 10,
            força: 10,
            intelecto: 10,
            presença: 10,
            vigor: 10
        }
    };
    adicionarFicha(novaFicha);
});

// Função para salvar a ficha ao clicar no cabeçalho (gradiente)
document.querySelector('header').addEventListener('click', () => {
    const fichaAtual = {
        nome: 'Personagem Atual',
        classe: 'Classe Atual',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: {
            agilidade: 10,
            força: 10,
            intelecto: 10,
            presença: 10,
            vigor: 10
        }
    };
    adicionarFicha(fichaAtual);  // Salva a ficha atual quando o cabeçalho for clicado
});

// Chama a função para carregar as fichas assim que a página for carregada
window.onload = carregarFichas;
