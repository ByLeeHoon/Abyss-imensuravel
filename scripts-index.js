// Array para armazenar as fichas
let fichas = [];

// Seletores
const fichasContainer = document.getElementById('fichas-container');
const novaFichaBtn = document.getElementById('nova-ficha-btn');

// Função para carregar dados do arquivo JSON
async function carregarFichas() {
    try {
        const resposta = await fetch('data.json'); // Carrega o arquivo
        const dados = await resposta.json();
        fichas = dados; // Atualiza o array fichas
        renderFichas(); // Renderiza na tela
    } catch (erro) {
        console.error('Erro ao carregar as fichas:', erro);
    }
}

// Função para salvar no LocalStorage (pode ser adaptada para GitHub futuramente)
function salvarFichasLocal() {
    localStorage.setItem('fichas', JSON.stringify(fichas));
}

// Função para renderizar as fichas
function renderFichas() {
    fichasContainer.innerHTML = ''; // Limpar o container
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

// Função para criar uma nova ficha
novaFichaBtn.addEventListener('click', () => {
    const novaFicha = {
        nome: '[Sem nome]',
        classe: 'Classe indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: {
            força: 10,
            destreza: 10,
            inteligência: 10,
            vida: 20,
            mana: 10
        }
    };
    fichas.push(novaFicha);
    salvarFichasLocal();
    renderFichas();
});

// Função para acessar uma ficha
function acessarFicha(index) {
    alert(`Acessando ficha: ${fichas[index].nome}`);
    // Aqui você pode abrir uma nova página ou modal com mais informações.
}

// Inicializar com os dados do JSON
carregarFichas();
